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
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 36,
        "end": 38,
        "body": []
      },
      "abstract": false,
      "declare": false
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
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 31,
        "end": 33,
        "body": []
      },
      "abstract": false,
      "declare": false
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
      ],
      "source": {
        "type": "Literal",
        "start": 17,
        "end": 33,
        "value": "./test/Test.js",
        "raw": "'./test/Test.js'"
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ClassDeclaration",
      "start": 130,
      "end": 334,
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
      "typeParameters": null,
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
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 151,
        "end": 334,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 205,
            "end": 332,
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
            "value": {
              "type": "FunctionExpression",
              "start": 216,
              "end": 332,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
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
              "body": {
                "type": "BlockStatement",
                "start": 226,
                "end": 332,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 236,
                    "end": 244,
                    "expression": {
                      "type": "CallExpression",
                      "start": 236,
                      "end": 243,
                      "callee": {
                        "type": "Super",
                        "start": 236,
                        "end": 241
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false
                    },
                    "directive": null
                  },
                  {
                    "type": "IfStatement",
                    "start": 253,
                    "end": 326,
                    "test": {
                      "type": "MemberExpression",
                      "start": 257,
                      "end": 269,
                      "object": {
                        "type": "Identifier",
                        "start": 257,
                        "end": 264,
                        "decorators": [],
                        "name": "options",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 265,
                        "end": 269,
                        "decorators": [],
                        "name": "test",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "consequent": {
                      "type": "BlockStatement",
                      "start": 271,
                      "end": 326,
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "start": 285,
                          "end": 316,
                          "expression": {
                            "type": "AssignmentExpression",
                            "start": 285,
                            "end": 315,
                            "operator": "=",
                            "left": {
                              "type": "MemberExpression",
                              "start": 285,
                              "end": 294,
                              "object": {
                                "type": "ThisExpression",
                                "start": 285,
                                "end": 289
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 290,
                                "end": 294,
                                "decorators": [],
                                "name": "test",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "computed": false
                            },
                            "right": {
                              "type": "NewExpression",
                              "start": 297,
                              "end": 315,
                              "callee": {
                                "type": "MemberExpression",
                                "start": 301,
                                "end": 313,
                                "object": {
                                  "type": "Identifier",
                                  "start": 301,
                                  "end": 308,
                                  "decorators": [],
                                  "name": "options",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 309,
                                  "end": 313,
                                  "decorators": [],
                                  "name": "test",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "optional": false,
                                "computed": false
                              },
                              "typeArguments": null,
                              "arguments": []
                            }
                          },
                          "directive": null
                        }
                      ]
                    },
                    "alternate": null
                  }
                ]
              },
              "expression": false
            },
            "kind": "constructor",
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
