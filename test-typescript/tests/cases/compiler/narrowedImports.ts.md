__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 94,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 37,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 14,
          "end": 36,
          "id": {
            "type": "Identifier",
            "start": 14,
            "end": 36,
            "name": "a0",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 16,
              "end": 36,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 18,
                "end": 36,
                "types": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 18,
                    "end": 24
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 27,
                    "end": 36
                  }
                ]
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "const",
      "declare": true
    },
    {
      "type": "ExportDefaultDeclaration",
      "start": 38,
      "end": 56,
      "declaration": {
        "type": "Identifier",
        "start": 53,
        "end": 55,
        "name": "a0",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "exportKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 57,
      "end": 93,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 64,
        "end": 93,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 70,
            "end": 92,
            "id": {
              "type": "Identifier",
              "start": 70,
              "end": 92,
              "name": "a1",
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 72,
                "end": 92,
                "typeAnnotation": {
                  "type": "TSUnionType",
                  "start": 74,
                  "end": 92,
                  "types": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 74,
                      "end": 80
                    },
                    {
                      "type": "TSUndefinedKeyword",
                      "start": 83,
                      "end": 92
                    }
                  ]
                }
              },
              "decorators": [],
              "optional": false
            },
            "init": null,
            "definite": false
          }
        ],
        "kind": "const",
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
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
  "end": 72,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 36,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 14,
          "end": 35,
          "id": {
            "type": "Identifier",
            "start": 14,
            "end": 35,
            "name": "b",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 15,
              "end": 35,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 17,
                "end": 35,
                "types": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 17,
                    "end": 23
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 26,
                    "end": 35
                  }
                ]
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "const",
      "declare": true
    },
    {
      "type": "TSModuleDeclaration",
      "start": 37,
      "end": 59,
      "id": {
        "type": "Identifier",
        "start": 55,
        "end": 56,
        "name": "b",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 57,
        "end": 59,
        "body": []
      },
      "kind": "namespace",
      "declare": true,
      "global": false
    },
    {
      "type": "TSExportAssignment",
      "start": 60,
      "end": 71,
      "expression": {
        "type": "Identifier",
        "start": 69,
        "end": 70,
        "name": "b",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      }
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
  "end": 192,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 39,
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 7,
          "end": 9,
          "local": {
            "type": "Identifier",
            "start": 7,
            "end": 9,
            "name": "a0",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        },
        {
          "type": "ImportSpecifier",
          "start": 13,
          "end": 15,
          "imported": {
            "type": "Identifier",
            "start": 13,
            "end": 15,
            "name": "a1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 13,
            "end": 15,
            "name": "a1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "importKind": "value"
        },
        {
          "type": "ImportSpecifier",
          "start": 17,
          "end": 25,
          "imported": {
            "type": "Identifier",
            "start": 17,
            "end": 19,
            "name": "a1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 23,
            "end": 25,
            "name": "a2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 33,
        "end": 38,
        "value": "./a",
        "raw": "\"./a\""
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ImportDeclaration",
      "start": 40,
      "end": 66,
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "start": 47,
          "end": 54,
          "local": {
            "type": "Identifier",
            "start": 52,
            "end": 54,
            "name": "b0",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        }
      ],
      "source": {
        "type": "Literal",
        "start": 60,
        "end": 65,
        "value": "./b",
        "raw": "\"./b\""
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "TSImportEqualsDeclaration",
      "start": 67,
      "end": 94,
      "id": {
        "type": "Identifier",
        "start": 74,
        "end": 76,
        "name": "b1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 79,
        "end": 93,
        "expression": {
          "type": "Literal",
          "start": 87,
          "end": 92,
          "value": "./b",
          "raw": "\"./b\""
        }
      },
      "importKind": "value"
    },
    {
      "type": "VariableDeclaration",
      "start": 96,
      "end": 110,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 100,
          "end": 109,
          "id": {
            "type": "Identifier",
            "start": 100,
            "end": 109,
            "name": "x",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 101,
              "end": 109,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 103,
                "end": 109
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "IfStatement",
      "start": 112,
      "end": 127,
      "test": {
        "type": "Identifier",
        "start": 116,
        "end": 118,
        "name": "a0",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "consequent": {
        "type": "ExpressionStatement",
        "start": 120,
        "end": 127,
        "expression": {
          "type": "AssignmentExpression",
          "start": 120,
          "end": 126,
          "operator": "=",
          "left": {
            "type": "Identifier",
            "start": 120,
            "end": 121,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "right": {
            "type": "Identifier",
            "start": 124,
            "end": 126,
            "name": "a0",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        },
        "directive": null
      },
      "alternate": null
    },
    {
      "type": "IfStatement",
      "start": 128,
      "end": 143,
      "test": {
        "type": "Identifier",
        "start": 132,
        "end": 134,
        "name": "a1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "consequent": {
        "type": "ExpressionStatement",
        "start": 136,
        "end": 143,
        "expression": {
          "type": "AssignmentExpression",
          "start": 136,
          "end": 142,
          "operator": "=",
          "left": {
            "type": "Identifier",
            "start": 136,
            "end": 137,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "right": {
            "type": "Identifier",
            "start": 140,
            "end": 142,
            "name": "a1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        },
        "directive": null
      },
      "alternate": null
    },
    {
      "type": "IfStatement",
      "start": 144,
      "end": 159,
      "test": {
        "type": "Identifier",
        "start": 148,
        "end": 150,
        "name": "a2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "consequent": {
        "type": "ExpressionStatement",
        "start": 152,
        "end": 159,
        "expression": {
          "type": "AssignmentExpression",
          "start": 152,
          "end": 158,
          "operator": "=",
          "left": {
            "type": "Identifier",
            "start": 152,
            "end": 153,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "right": {
            "type": "Identifier",
            "start": 156,
            "end": 158,
            "name": "a2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        },
        "directive": null
      },
      "alternate": null
    },
    {
      "type": "IfStatement",
      "start": 160,
      "end": 175,
      "test": {
        "type": "Identifier",
        "start": 164,
        "end": 166,
        "name": "b0",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "consequent": {
        "type": "ExpressionStatement",
        "start": 168,
        "end": 175,
        "expression": {
          "type": "AssignmentExpression",
          "start": 168,
          "end": 174,
          "operator": "=",
          "left": {
            "type": "Identifier",
            "start": 168,
            "end": 169,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "right": {
            "type": "Identifier",
            "start": 172,
            "end": 174,
            "name": "b0",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        },
        "directive": null
      },
      "alternate": null
    },
    {
      "type": "IfStatement",
      "start": 176,
      "end": 191,
      "test": {
        "type": "Identifier",
        "start": 180,
        "end": 182,
        "name": "b1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "consequent": {
        "type": "ExpressionStatement",
        "start": 184,
        "end": 191,
        "expression": {
          "type": "AssignmentExpression",
          "start": 184,
          "end": 190,
          "operator": "=",
          "left": {
            "type": "Identifier",
            "start": 184,
            "end": 185,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "right": {
            "type": "Identifier",
            "start": 188,
            "end": 190,
            "name": "b1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        },
        "directive": null
      },
      "alternate": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
