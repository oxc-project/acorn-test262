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
        "name": "MyInterface",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
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
              "name": "myMethod",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
                "argument": {
                  "type": "Identifier",
                  "start": 40,
                  "end": 46,
                  "name": "myList",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "decorators": [],
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
      "id": {
        "type": "Identifier",
        "start": 64,
        "end": 71,
        "name": "MyClass",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 95,
        "end": 143,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 101,
            "end": 141,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 101,
              "end": 109,
              "name": "myMethod",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 109,
              "end": 141,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 110,
                  "end": 123,
                  "name": "myList",
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
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 125,
                "end": 141,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [
        {
          "type": "TSClassImplements",
          "start": 83,
          "end": 94,
          "expression": {
            "type": "Identifier",
            "start": 83,
            "end": 94,
            "name": "MyInterface",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      ],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "VariableDeclaration",
      "start": 145,
      "end": 180,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 149,
          "end": 179,
          "id": {
            "type": "Identifier",
            "start": 149,
            "end": 163,
            "name": "x",
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
                  "name": "MyInterface",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 166,
            "end": 179,
            "callee": {
              "type": "Identifier",
              "start": 170,
              "end": 177,
              "name": "MyClass",
              "typeAnnotation": null,
              "decorators": [],
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
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 183,
            "end": 191,
            "name": "myMethod",
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
      "type": "VariableDeclaration",
      "start": 264,
      "end": 295,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 268,
          "end": 294,
          "id": {
            "type": "Identifier",
            "start": 268,
            "end": 278,
            "name": "y",
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
                  "name": "MyClass",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 281,
            "end": 294,
            "callee": {
              "type": "Identifier",
              "start": 285,
              "end": 292,
              "name": "MyClass",
              "typeAnnotation": null,
              "decorators": [],
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
            "name": "y",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 298,
            "end": 306,
            "name": "myMethod",
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
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
