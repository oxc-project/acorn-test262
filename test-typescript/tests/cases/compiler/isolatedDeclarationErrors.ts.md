__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 228,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 46,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 44,
        "end": 46,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 35,
        "decorators": [],
        "name": "errorOnAssignmentBelowDecl",
        "optional": false
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 37,
        "end": 43,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 39,
          "end": 43
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 47,
      "end": 81,
      "expression": {
        "type": "AssignmentExpression",
        "start": 47,
        "end": 80,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 47,
          "end": 75,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 47,
            "end": 73,
            "decorators": [],
            "name": "errorOnAssignmentBelowDecl",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 74,
            "end": 75,
            "decorators": [],
            "name": "a",
            "optional": false
          }
        },
        "right": {
          "type": "Literal",
          "start": 78,
          "end": 80,
          "raw": "\"\"",
          "value": ""
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 83,
      "end": 128,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 89,
          "end": 128,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 89,
            "end": 111,
            "decorators": [],
            "name": "errorOnAssignmentBelow",
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 114,
            "end": 128,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 126,
              "end": 128,
              "body": []
            },
            "expression": false,
            "generator": false,
            "id": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 116,
              "end": 122,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 118,
                "end": 122
              }
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExpressionStatement",
      "start": 129,
      "end": 159,
      "expression": {
        "type": "AssignmentExpression",
        "start": 129,
        "end": 158,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 129,
          "end": 153,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 129,
            "end": 151,
            "decorators": [],
            "name": "errorOnAssignmentBelow",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 152,
            "end": 153,
            "decorators": [],
            "name": "a",
            "optional": false
          }
        },
        "right": {
          "type": "Literal",
          "start": 156,
          "end": 158,
          "raw": "\"\"",
          "value": ""
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 161,
      "end": 198,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 167,
          "end": 198,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 167,
            "end": 187,
            "decorators": [],
            "name": "errorOnMissingReturn",
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 190,
            "end": 198,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 196,
              "end": 198,
              "body": []
            },
            "expression": false,
            "generator": false,
            "id": null,
            "params": []
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExpressionStatement",
      "start": 199,
      "end": 227,
      "expression": {
        "type": "AssignmentExpression",
        "start": 199,
        "end": 226,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 199,
          "end": 221,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 199,
            "end": 219,
            "decorators": [],
            "name": "errorOnMissingReturn",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 220,
            "end": 221,
            "decorators": [],
            "name": "a",
            "optional": false
          }
        },
        "right": {
          "type": "Literal",
          "start": 224,
          "end": 226,
          "raw": "\"\"",
          "value": ""
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
