__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 318,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 57,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 21,
        "decorators": [],
        "name": "MyInterface",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 22,
        "end": 57,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 28,
            "end": 55,
            "key": {
              "type": "Identifier",
              "start": 28,
              "end": 36,
              "decorators": [],
              "name": "myMethod",
              "optional": false,
              "typeAnnotation": null
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "RestElement",
                "start": 37,
                "end": 53,
                "decorators": [],
                "argument": {
                  "type": "Identifier",
                  "start": 40,
                  "end": 46,
                  "decorators": [],
                  "name": "myList",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 46,
                  "end": 53,
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "start": 48,
                    "end": 53,
                    "elementType": {
                      "type": "TSAnyKeyword",
                      "start": 48,
                      "end": 51
                    }
                  }
                },
                "value": null
              }
            ],
            "returnType": null,
            "accessibility": null,
            "readonly": false,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 58,
      "end": 143,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 64,
        "end": 71,
        "decorators": [],
        "name": "MyClass",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [
        {
          "type": "TSClassImplements",
          "start": 83,
          "end": 94,
          "expression": {
            "type": "Identifier",
            "start": 83,
            "end": 94,
            "decorators": [],
            "name": "MyInterface",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      ],
      "body": {
        "type": "ClassBody",
        "start": 95,
        "end": 143,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 101,
            "end": 141,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 101,
              "end": 109,
              "decorators": [],
              "name": "myMethod",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 109,
              "end": 141,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 110,
                  "end": 123,
                  "decorators": [],
                  "name": "myList",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 116,
                    "end": 123,
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "start": 118,
                      "end": 123,
                      "elementType": {
                        "type": "TSAnyKeyword",
                        "start": 118,
                        "end": 121
                      }
                    }
                  }
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 125,
                "end": 141,
                "body": []
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 145,
      "end": 180,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 149,
          "end": 179,
          "id": {
            "type": "Identifier",
            "start": 149,
            "end": 163,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 150,
              "end": 163,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 152,
                "end": 163,
                "typeName": {
                  "type": "Identifier",
                  "start": 152,
                  "end": 163,
                  "decorators": [],
                  "name": "MyInterface",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": {
            "type": "NewExpression",
            "start": 166,
            "end": 179,
            "callee": {
              "type": "Identifier",
              "start": 170,
              "end": 177,
              "decorators": [],
              "name": "MyClass",
              "optional": false,
              "typeAnnotation": null
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
      "type": "ExpressionStatement",
      "start": 181,
      "end": 194,
      "expression": {
        "type": "CallExpression",
        "start": 181,
        "end": 193,
        "callee": {
          "type": "MemberExpression",
          "start": 181,
          "end": 191,
          "object": {
            "type": "Identifier",
            "start": 181,
            "end": 182,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 183,
            "end": 191,
            "decorators": [],
            "name": "myMethod",
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
      "type": "VariableDeclaration",
      "start": 264,
      "end": 295,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 268,
          "end": 294,
          "id": {
            "type": "Identifier",
            "start": 268,
            "end": 278,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 269,
              "end": 278,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 271,
                "end": 278,
                "typeName": {
                  "type": "Identifier",
                  "start": 271,
                  "end": 278,
                  "decorators": [],
                  "name": "MyClass",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": {
            "type": "NewExpression",
            "start": 281,
            "end": 294,
            "callee": {
              "type": "Identifier",
              "start": 285,
              "end": 292,
              "decorators": [],
              "name": "MyClass",
              "optional": false,
              "typeAnnotation": null
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
      "type": "ExpressionStatement",
      "start": 296,
      "end": 309,
      "expression": {
        "type": "CallExpression",
        "start": 296,
        "end": 308,
        "callee": {
          "type": "MemberExpression",
          "start": 296,
          "end": 306,
          "object": {
            "type": "Identifier",
            "start": 296,
            "end": 297,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 298,
            "end": 306,
            "decorators": [],
            "name": "myMethod",
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
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
