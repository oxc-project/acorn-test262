__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 254,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 69,
      "id": {
        "type": "Identifier",
        "start": 15,
        "end": 18,
        "name": "Foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 19,
        "end": 69,
        "body": [
          {
            "type": "TSDeclareFunction",
            "start": 22,
            "end": 40,
            "id": {
              "type": "Identifier",
              "start": 31,
              "end": 32,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "expression": false,
            "generator": false,
            "async": false,
            "params": [],
            "body": null,
            "declare": false,
            "typeParameters": null,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 34,
              "end": 39,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 35,
                "end": 39
              }
            }
          },
          {
            "type": "VariableDeclaration",
            "start": 42,
            "end": 55,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 46,
                "end": 54,
                "id": {
                  "type": "Identifier",
                  "start": 46,
                  "end": 54,
                  "name": "b",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 47,
                    "end": 54,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 48,
                      "end": 54
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": null,
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "ClassDeclaration",
            "start": 57,
            "end": 67,
            "id": {
              "type": "Identifier",
              "start": 63,
              "end": 64,
              "name": "C",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "superClass": null,
            "body": {
              "type": "ClassBody",
              "start": 65,
              "end": 67,
              "body": []
            },
            "decorators": [],
            "typeParameters": null,
            "implements": [],
            "abstract": false,
            "declare": false,
            "superTypeArguments": null
          }
        ]
      },
      "kind": "module",
      "declare": true,
      "global": false
    },
    {
      "type": "ExpressionStatement",
      "start": 71,
      "end": 79,
      "expression": {
        "type": "CallExpression",
        "start": 71,
        "end": 78,
        "callee": {
          "type": "MemberExpression",
          "start": 71,
          "end": 76,
          "object": {
            "type": "Identifier",
            "start": 71,
            "end": 74,
            "name": "Foo",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 75,
            "end": 76,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 80,
      "end": 86,
      "expression": {
        "type": "MemberExpression",
        "start": 80,
        "end": 85,
        "object": {
          "type": "Identifier",
          "start": 80,
          "end": 83,
          "name": "Foo",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "property": {
          "type": "Identifier",
          "start": 84,
          "end": 85,
          "name": "b",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "computed": false,
        "optional": false
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 87,
      "end": 107,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 91,
          "end": 106,
          "id": {
            "type": "Identifier",
            "start": 91,
            "end": 92,
            "name": "c",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 95,
            "end": 106,
            "callee": {
              "type": "MemberExpression",
              "start": 99,
              "end": 104,
              "object": {
                "type": "Identifier",
                "start": 99,
                "end": 102,
                "name": "Foo",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 103,
                "end": 104,
                "name": "C",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [],
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 109,
      "end": 212,
      "id": {
        "type": "Identifier",
        "start": 124,
        "end": 128,
        "name": "Foo2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 129,
        "end": 212,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 135,
            "end": 161,
            "declaration": {
              "type": "TSDeclareFunction",
              "start": 142,
              "end": 161,
              "id": {
                "type": "Identifier",
                "start": 151,
                "end": 152,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": null,
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 154,
                "end": 160,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 156,
                  "end": 160
                }
              }
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 166,
            "end": 187,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 173,
              "end": 187,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 177,
                  "end": 186,
                  "id": {
                    "type": "Identifier",
                    "start": 177,
                    "end": 186,
                    "name": "b",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 178,
                      "end": 186,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 180,
                        "end": 186
                      }
                    },
                    "decorators": [],
                    "optional": false
                  },
                  "init": null,
                  "definite": false
                }
              ],
              "kind": "var",
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 192,
            "end": 210,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 199,
              "end": 210,
              "id": {
                "type": "Identifier",
                "start": 205,
                "end": 206,
                "name": "C",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "superClass": null,
              "body": {
                "type": "ClassBody",
                "start": 207,
                "end": 210,
                "body": []
              },
              "decorators": [],
              "typeParameters": null,
              "implements": [],
              "abstract": false,
              "declare": false,
              "superTypeArguments": null
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          }
        ]
      },
      "kind": "module",
      "declare": true,
      "global": false
    },
    {
      "type": "ExpressionStatement",
      "start": 214,
      "end": 223,
      "expression": {
        "type": "CallExpression",
        "start": 214,
        "end": 222,
        "callee": {
          "type": "MemberExpression",
          "start": 214,
          "end": 220,
          "object": {
            "type": "Identifier",
            "start": 214,
            "end": 218,
            "name": "Foo2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 219,
            "end": 220,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 224,
      "end": 231,
      "expression": {
        "type": "MemberExpression",
        "start": 224,
        "end": 230,
        "object": {
          "type": "Identifier",
          "start": 224,
          "end": 228,
          "name": "Foo2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "property": {
          "type": "Identifier",
          "start": 229,
          "end": 230,
          "name": "b",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "computed": false,
        "optional": false
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 232,
      "end": 254,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 236,
          "end": 253,
          "id": {
            "type": "Identifier",
            "start": 236,
            "end": 238,
            "name": "c2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 241,
            "end": 253,
            "callee": {
              "type": "MemberExpression",
              "start": 245,
              "end": 251,
              "object": {
                "type": "Identifier",
                "start": 245,
                "end": 249,
                "name": "Foo2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 250,
                "end": 251,
                "name": "C",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [],
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
