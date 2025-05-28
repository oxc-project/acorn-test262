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
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null
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
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 34,
              "end": 39,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 35,
                "end": 39
              }
            },
            "body": null,
            "expression": false
          },
          {
            "type": "VariableDeclaration",
            "start": 42,
            "end": 55,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 46,
                "end": 54,
                "id": {
                  "type": "Identifier",
                  "start": 46,
                  "end": 54,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 47,
                    "end": 54,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 48,
                      "end": 54
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
            "type": "ClassDeclaration",
            "start": 57,
            "end": 67,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "start": 63,
              "end": 64,
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null,
            "superClass": null,
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "start": 65,
              "end": 67,
              "body": []
            },
            "abstract": false,
            "declare": false
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
            "decorators": [],
            "name": "Foo",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 75,
            "end": 76,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false
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
          "decorators": [],
          "name": "Foo",
          "optional": false,
          "typeAnnotation": null
        },
        "property": {
          "type": "Identifier",
          "start": 84,
          "end": 85,
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "computed": false
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 87,
      "end": 107,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 91,
          "end": 106,
          "id": {
            "type": "Identifier",
            "start": 91,
            "end": 92,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null
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
                "decorators": [],
                "name": "Foo",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 103,
                "end": 104,
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": []
          },
          "definite": false
        }
      ],
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
        "decorators": [],
        "name": "Foo2",
        "optional": false,
        "typeAnnotation": null
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
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 154,
                "end": 160,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 156,
                  "end": 160
                }
              },
              "body": null,
              "expression": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 166,
            "end": 187,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 173,
              "end": 187,
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 177,
                  "end": 186,
                  "id": {
                    "type": "Identifier",
                    "start": 177,
                    "end": 186,
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 178,
                      "end": 186,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 180,
                        "end": 186
                      }
                    }
                  },
                  "init": null,
                  "definite": false
                }
              ],
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 192,
            "end": 210,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 199,
              "end": 210,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 205,
                "end": 206,
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "start": 207,
                "end": 210,
                "body": []
              },
              "abstract": false,
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
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
            "decorators": [],
            "name": "Foo2",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 219,
            "end": 220,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false
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
          "decorators": [],
          "name": "Foo2",
          "optional": false,
          "typeAnnotation": null
        },
        "property": {
          "type": "Identifier",
          "start": 229,
          "end": 230,
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "computed": false
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 232,
      "end": 254,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 236,
          "end": 253,
          "id": {
            "type": "Identifier",
            "start": 236,
            "end": 238,
            "decorators": [],
            "name": "c2",
            "optional": false,
            "typeAnnotation": null
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
                "decorators": [],
                "name": "Foo2",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 250,
                "end": 251,
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": []
          },
          "definite": false
        }
      ],
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
