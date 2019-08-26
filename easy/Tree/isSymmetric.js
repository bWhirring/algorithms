// 给定一个二叉树，检查它是否是镜像对称的。

// 例如，二叉树 [1,2,2,3,4,4,3] 是对称的。

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
  return root ? isSame(root.left, root.right) : true;

  function isSame(p, q) {
    while (p || q) {
      if (!p || !q) return false;
      if (!isSame(p.right, q.left)) return false;
      if (p.val !== q.val) return false;
      p = p.left;
      q = q.right;
    }
    return true;
  }
};
