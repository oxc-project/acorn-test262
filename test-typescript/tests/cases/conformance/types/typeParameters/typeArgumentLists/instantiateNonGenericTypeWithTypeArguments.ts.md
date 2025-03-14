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
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 102,
        "end": 120,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 108,
            "end": 118,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 108,
              "end": 109,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
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
            "value": null
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 100,
        "end": 101,
        "decorators": [],
        "name": "C",
        "optional": false
      },
      "implements": [],
      "superClass": null
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 126,
            "end": 127,
            "decorators": [],
            "name": "c",
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 130,
            "end": 145,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 134,
              "end": 135,
              "decorators": [],
              "name": "C",
              "optional": false
            },
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
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "FunctionDeclaration",
      "start": 148,
      "end": 172,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 169,
        "end": 172,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 157,
        "end": 160,
        "decorators": [],
        "name": "Foo",
        "optional": false
      },
      "params": [],
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 177,
            "end": 178,
            "decorators": [],
            "name": "r",
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 181,
            "end": 198,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 185,
              "end": 188,
              "decorators": [],
              "name": "Foo",
              "optional": false
            },
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
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 205,
            "end": 220,
            "decorators": [],
            "name": "f",
            "optional": false,
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
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 226,
            "end": 228,
            "decorators": [],
            "name": "r2",
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 231,
            "end": 246,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 235,
              "end": 236,
              "decorators": [],
              "name": "f",
              "optional": false
            },
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
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 253,
            "end": 259,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 254,
              "end": 259,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 256,
                "end": 259
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 279,
            "end": 281,
            "decorators": [],
            "name": "r2",
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 284,
            "end": 299,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 288,
              "end": 289,
              "decorators": [],
              "name": "a",
              "optional": false
            },
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
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
