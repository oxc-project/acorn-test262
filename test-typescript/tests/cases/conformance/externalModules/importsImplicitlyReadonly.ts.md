__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 43,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 17,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 7,
        "end": 17,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 11,
            "end": 16,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 11,
              "end": 12,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "Literal",
              "start": 15,
              "end": 16,
              "raw": "1",
              "value": 1,
              "regex": null,
              "bigint": null
            }
          }
        ],
        "declare": false,
        "kind": "var"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "VariableDeclaration",
      "start": 18,
      "end": 28,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 22,
          "end": 27,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 22,
            "end": 23,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 26,
            "end": 27,
            "raw": "1",
            "value": 1,
            "regex": null,
            "bigint": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 29,
      "end": 42,
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 38,
          "end": 39,
          "exported": {
            "type": "Identifier",
            "start": 38,
            "end": 39,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null
          },
          "exportKind": "value",
          "local": {
            "type": "Identifier",
            "start": 38,
            "end": 39,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 218,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 27,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 21,
        "end": 26,
        "raw": "\"./a\"",
        "value": "./a",
        "regex": null,
        "bigint": null
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 9,
          "end": 10,
          "imported": {
            "type": "Identifier",
            "start": 9,
            "end": 10,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 10,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          }
        },
        {
          "type": "ImportSpecifier",
          "start": 12,
          "end": 13,
          "imported": {
            "type": "Identifier",
            "start": 12,
            "end": 13,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 12,
            "end": 13,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "ImportDeclaration",
      "start": 28,
      "end": 54,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 48,
        "end": 53,
        "raw": "\"./a\"",
        "value": "./a",
        "regex": null,
        "bigint": null
      },
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "start": 35,
          "end": 42,
          "local": {
            "type": "Identifier",
            "start": 40,
            "end": 42,
            "decorators": [],
            "name": "a1",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "TSImportEqualsDeclaration",
      "start": 55,
      "end": 82,
      "id": {
        "type": "Identifier",
        "start": 62,
        "end": 64,
        "decorators": [],
        "name": "a2",
        "optional": false,
        "typeAnnotation": null
      },
      "importKind": "value",
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 67,
        "end": 81,
        "expression": {
          "type": "Literal",
          "start": 75,
          "end": 80,
          "raw": "\"./a\"",
          "value": "./a",
          "regex": null,
          "bigint": null
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 83,
      "end": 97,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 89,
          "end": 96,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 89,
            "end": 91,
            "decorators": [],
            "name": "a3",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Identifier",
            "start": 94,
            "end": 96,
            "decorators": [],
            "name": "a1",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExpressionStatement",
      "start": 99,
      "end": 105,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 99,
        "end": 104,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 99,
          "end": 100,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Literal",
          "start": 103,
          "end": 104,
          "raw": "1",
          "value": 1,
          "regex": null,
          "bigint": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 119,
      "end": 125,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 119,
        "end": 124,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 119,
          "end": 120,
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Literal",
          "start": 123,
          "end": 124,
          "raw": "1",
          "value": 1,
          "regex": null,
          "bigint": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 139,
      "end": 148,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 139,
        "end": 147,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 139,
          "end": 143,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 139,
            "end": 141,
            "decorators": [],
            "name": "a1",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 142,
            "end": 143,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Literal",
          "start": 146,
          "end": 147,
          "raw": "1",
          "value": 1,
          "regex": null,
          "bigint": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 159,
      "end": 168,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 159,
        "end": 167,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 159,
          "end": 163,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 159,
            "end": 161,
            "decorators": [],
            "name": "a1",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 162,
            "end": 163,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Literal",
          "start": 166,
          "end": 167,
          "raw": "1",
          "value": 1,
          "regex": null,
          "bigint": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 179,
      "end": 188,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 179,
        "end": 187,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 179,
          "end": 183,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 179,
            "end": 181,
            "decorators": [],
            "name": "a2",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 182,
            "end": 183,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Literal",
          "start": 186,
          "end": 187,
          "raw": "1",
          "value": 1,
          "regex": null,
          "bigint": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 189,
      "end": 198,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 189,
        "end": 197,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 189,
          "end": 193,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 189,
            "end": 191,
            "decorators": [],
            "name": "a2",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 192,
            "end": 193,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Literal",
          "start": 196,
          "end": 197,
          "raw": "1",
          "value": 1,
          "regex": null,
          "bigint": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 199,
      "end": 208,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 199,
        "end": 207,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 199,
          "end": 203,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 199,
            "end": 201,
            "decorators": [],
            "name": "a3",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 202,
            "end": 203,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Literal",
          "start": 206,
          "end": 207,
          "raw": "1",
          "value": 1,
          "regex": null,
          "bigint": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 209,
      "end": 218,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 209,
        "end": 217,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 209,
          "end": 213,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 209,
            "end": 211,
            "decorators": [],
            "name": "a3",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 212,
            "end": 213,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Literal",
          "start": 216,
          "end": 217,
          "raw": "1",
          "value": 1,
          "regex": null,
          "bigint": null
        }
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
