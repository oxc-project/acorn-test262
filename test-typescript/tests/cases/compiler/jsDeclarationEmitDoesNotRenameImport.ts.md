__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 25,
  "end": 59,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 25,
      "end": 38,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 36,
        "end": 38,
        "body": []
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 31,
        "end": 35,
        "decorators": [],
        "name": "Test",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ExportDefaultDeclaration",
      "start": 39,
      "end": 59,
      "declaration": {
        "type": "Identifier",
        "start": 54,
        "end": 58,
        "decorators": [],
        "name": "Test",
        "optional": false,
        "typeAnnotation": null
      },
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
  "start": 20,
  "end": 54,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 20,
      "end": 33,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 31,
        "end": 33,
        "body": []
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 26,
        "end": 30,
        "decorators": [],
        "name": "Test",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ExportDefaultDeclaration",
      "start": 34,
      "end": 54,
      "declaration": {
        "type": "Identifier",
        "start": 49,
        "end": 53,
        "decorators": [],
        "name": "Test",
        "optional": false,
        "typeAnnotation": null
      },
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
  "end": 353,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 33,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 17,
        "end": 33,
        "raw": "'./test/Test.js'",
        "value": "./test/Test.js"
      },
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 7,
          "end": 11,
          "local": {
            "type": "Identifier",
            "start": 7,
            "end": 11,
            "decorators": [],
            "name": "Test",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "ClassDeclaration",
      "start": 130,
      "end": 334,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 151,
        "end": 334,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 205,
            "end": 332,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 205,
              "end": 216,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 216,
              "end": 332,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 226,
                "end": 332,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 236,
                    "end": 244,
                    "directive": null,
                    "expression": {
                      "type": "CallExpression",
                      "start": 236,
                      "end": 243,
                      "arguments": [],
                      "callee": {
                        "type": "Super",
                        "start": 236,
                        "end": 241
                      },
                      "optional": false,
                      "typeArguments": null
                    }
                  },
                  {
                    "type": "IfStatement",
                    "start": 253,
                    "end": 326,
                    "alternate": null,
                    "consequent": {
                      "type": "BlockStatement",
                      "start": 271,
                      "end": 326,
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "start": 285,
                          "end": 316,
                          "directive": null,
                          "expression": {
                            "type": "AssignmentExpression",
                            "start": 285,
                            "end": 315,
                            "operator": "=",
                            "left": {
                              "type": "MemberExpression",
                              "start": 285,
                              "end": 294,
                              "computed": false,
                              "object": {
                                "type": "ThisExpression",
                                "start": 285,
                                "end": 289
                              },
                              "optional": false,
                              "property": {
                                "type": "Identifier",
                                "start": 290,
                                "end": 294,
                                "decorators": [],
                                "name": "test",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            },
                            "right": {
                              "type": "NewExpression",
                              "start": 297,
                              "end": 315,
                              "arguments": [],
                              "callee": {
                                "type": "MemberExpression",
                                "start": 301,
                                "end": 313,
                                "computed": false,
                                "object": {
                                  "type": "Identifier",
                                  "start": 301,
                                  "end": 308,
                                  "decorators": [],
                                  "name": "options",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "start": 309,
                                  "end": 313,
                                  "decorators": [],
                                  "name": "test",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              },
                              "typeArguments": null
                            }
                          }
                        }
                      ]
                    },
                    "test": {
                      "type": "MemberExpression",
                      "start": 257,
                      "end": 269,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 257,
                        "end": 264,
                        "decorators": [],
                        "name": "options",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 265,
                        "end": 269,
                        "decorators": [],
                        "name": "test",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 217,
                  "end": 224,
                  "decorators": [],
                  "name": "options",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "returnType": null,
              "typeParameters": null
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 136,
        "end": 137,
        "decorators": [],
        "name": "X",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 146,
        "end": 150,
        "decorators": [],
        "name": "Test",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ExportDefaultDeclaration",
      "start": 336,
      "end": 353,
      "declaration": {
        "type": "Identifier",
        "start": 351,
        "end": 352,
        "decorators": [],
        "name": "X",
        "optional": false,
        "typeAnnotation": null
      },
      "exportKind": "value"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
