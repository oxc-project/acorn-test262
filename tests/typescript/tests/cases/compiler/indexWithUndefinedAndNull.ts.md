__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 195,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 40,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 11,
        "decorators": [],
        "name": "N",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 12,
        "end": 40,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 18,
            "end": 38,
            "parameters": [
              {
                "type": "Identifier",
                "start": 19,
                "end": 28,
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 20,
                  "end": 28,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 22,
                    "end": 28
                  }
                }
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 29,
              "end": 37,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 31,
                "end": 37
              }
            },
            "readonly": false,
            "static": false,
            "accessibility": null
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 41,
      "end": 81,
      "id": {
        "type": "Identifier",
        "start": 51,
        "end": 52,
        "decorators": [],
        "name": "S",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 53,
        "end": 81,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 59,
            "end": 79,
            "parameters": [
              {
                "type": "Identifier",
                "start": 60,
                "end": 69,
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 61,
                  "end": 69,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 63,
                    "end": 69
                  }
                }
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 70,
              "end": 78,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 72,
                "end": 78
              }
            },
            "readonly": false,
            "static": false,
            "accessibility": null
          }
        ]
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 82,
      "end": 91,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 86,
          "end": 90,
          "id": {
            "type": "Identifier",
            "start": 86,
            "end": 90,
            "decorators": [],
            "name": "n",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 87,
              "end": 90,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 89,
                "end": 90,
                "typeName": {
                  "type": "Identifier",
                  "start": 89,
                  "end": 90,
                  "decorators": [],
                  "name": "N",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 92,
      "end": 101,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 96,
          "end": 100,
          "id": {
            "type": "Identifier",
            "start": 96,
            "end": 100,
            "decorators": [],
            "name": "s",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 97,
              "end": 100,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 99,
                "end": 100,
                "typeName": {
                  "type": "Identifier",
                  "start": 99,
                  "end": 100,
                  "decorators": [],
                  "name": "S",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 102,
      "end": 133,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 106,
          "end": 132,
          "id": {
            "type": "Identifier",
            "start": 106,
            "end": 117,
            "decorators": [],
            "name": "str",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 109,
              "end": 117,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 111,
                "end": 117
              }
            }
          },
          "init": {
            "type": "MemberExpression",
            "start": 120,
            "end": 132,
            "object": {
              "type": "Identifier",
              "start": 120,
              "end": 121,
              "decorators": [],
              "name": "n",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 122,
              "end": 131,
              "decorators": [],
              "name": "undefined",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": true
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 134,
      "end": 148,
      "expression": {
        "type": "AssignmentExpression",
        "start": 134,
        "end": 147,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 134,
          "end": 137,
          "decorators": [],
          "name": "str",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "MemberExpression",
          "start": 140,
          "end": 147,
          "object": {
            "type": "Identifier",
            "start": 140,
            "end": 141,
            "decorators": [],
            "name": "n",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Literal",
            "start": 142,
            "end": 146,
            "value": null,
            "raw": "null"
          },
          "optional": false,
          "computed": true
        }
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 149,
      "end": 180,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 153,
          "end": 179,
          "id": {
            "type": "Identifier",
            "start": 153,
            "end": 164,
            "decorators": [],
            "name": "num",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 156,
              "end": 164,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 158,
                "end": 164
              }
            }
          },
          "init": {
            "type": "MemberExpression",
            "start": 167,
            "end": 179,
            "object": {
              "type": "Identifier",
              "start": 167,
              "end": 168,
              "decorators": [],
              "name": "s",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 169,
              "end": 178,
              "decorators": [],
              "name": "undefined",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": true
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 181,
      "end": 195,
      "expression": {
        "type": "AssignmentExpression",
        "start": 181,
        "end": 194,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 181,
          "end": 184,
          "decorators": [],
          "name": "num",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "MemberExpression",
          "start": 187,
          "end": 194,
          "object": {
            "type": "Identifier",
            "start": 187,
            "end": 188,
            "decorators": [],
            "name": "s",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Literal",
            "start": 189,
            "end": 193,
            "value": null,
            "raw": "null"
          },
          "optional": false,
          "computed": true
        }
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
