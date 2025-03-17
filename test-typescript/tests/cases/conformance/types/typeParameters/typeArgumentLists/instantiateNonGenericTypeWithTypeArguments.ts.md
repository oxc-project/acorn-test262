__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 94,
  "end": 300,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 94,
      "end": 120,
      "id": {
        "type": "Identifier",
        "start": 100,
        "end": 101,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 102,
        "end": 120,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 108,
            "end": 118,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 108,
              "end": 109,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 109,
              "end": 117,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 111,
                "end": 117
              }
            },
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "VariableDeclaration",
      "start": 122,
      "end": 146,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 126,
          "end": 145,
          "id": {
            "type": "Identifier",
            "start": 126,
            "end": 127,
            "name": "c",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 130,
            "end": 145,
            "callee": {
              "type": "Identifier",
              "start": 134,
              "end": 135,
              "name": "C",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [],
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 135,
              "end": 143,
              "params": [
                {
                  "type": "TSNumberKeyword",
                  "start": 136,
                  "end": 142
                }
              ]
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 148,
      "end": 172,
      "id": {
        "type": "Identifier",
        "start": 157,
        "end": 160,
        "name": "Foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 169,
        "end": 172,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 162,
        "end": 168,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 164,
          "end": 168
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 173,
      "end": 199,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 177,
          "end": 198,
          "id": {
            "type": "Identifier",
            "start": 177,
            "end": 178,
            "name": "r",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 181,
            "end": 198,
            "callee": {
              "type": "Identifier",
              "start": 185,
              "end": 188,
              "name": "Foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [],
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 188,
              "end": 196,
              "params": [
                {
                  "type": "TSNumberKeyword",
                  "start": 189,
                  "end": 195
                }
              ]
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 201,
      "end": 221,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 205,
          "end": 220,
          "id": {
            "type": "Identifier",
            "start": 205,
            "end": 220,
            "name": "f",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 206,
              "end": 220,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 208,
                "end": 220,
                "members": [
                  {
                    "type": "TSCallSignatureDeclaration",
                    "start": 210,
                    "end": 218,
                    "typeParameters": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 212,
                      "end": 218,
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 214,
                        "end": 218
                      }
                    }
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
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 222,
      "end": 247,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 226,
          "end": 246,
          "id": {
            "type": "Identifier",
            "start": 226,
            "end": 228,
            "name": "r2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 231,
            "end": 246,
            "callee": {
              "type": "Identifier",
              "start": 235,
              "end": 236,
              "name": "f",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [],
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 236,
              "end": 244,
              "params": [
                {
                  "type": "TSNumberKeyword",
                  "start": 237,
                  "end": 243
                }
              ]
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 249,
      "end": 260,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 253,
          "end": 259,
          "id": {
            "type": "Identifier",
            "start": 253,
            "end": 259,
            "name": "a",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 254,
              "end": 259,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 256,
                "end": 259
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
      "type": "VariableDeclaration",
      "start": 275,
      "end": 300,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 279,
          "end": 299,
          "id": {
            "type": "Identifier",
            "start": 279,
            "end": 281,
            "name": "r2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 284,
            "end": 299,
            "callee": {
              "type": "Identifier",
              "start": 288,
              "end": 289,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [],
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 289,
              "end": 297,
              "params": [
                {
                  "type": "TSNumberKeyword",
                  "start": 290,
                  "end": 296
                }
              ]
            }
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
