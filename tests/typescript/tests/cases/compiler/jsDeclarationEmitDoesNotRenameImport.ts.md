__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Test",
        "optional": false,
        "typeAnnotation": null,
        "start": 31,
        "end": 35
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 36,
        "end": 38
      },
      "abstract": false,
      "declare": false,
      "start": 25,
      "end": 38
    },
    {
      "type": "ExportDefaultDeclaration",
      "declaration": {
        "type": "Identifier",
        "decorators": [],
        "name": "Test",
        "optional": false,
        "typeAnnotation": null,
        "start": 54,
        "end": 58
      },
      "exportKind": "value",
      "start": 39,
      "end": 59
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 25,
  "end": 59
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Test",
        "optional": false,
        "typeAnnotation": null,
        "start": 26,
        "end": 30
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 31,
        "end": 33
      },
      "abstract": false,
      "declare": false,
      "start": 20,
      "end": 33
    },
    {
      "type": "ExportDefaultDeclaration",
      "declaration": {
        "type": "Identifier",
        "decorators": [],
        "name": "Test",
        "optional": false,
        "typeAnnotation": null,
        "start": 49,
        "end": 53
      },
      "exportKind": "value",
      "start": 34,
      "end": 54
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 20,
  "end": 54
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "Test",
            "optional": false,
            "typeAnnotation": null,
            "start": 7,
            "end": 11
          },
          "start": 7,
          "end": 11
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./test/Test.js",
        "raw": "'./test/Test.js'",
        "start": 17,
        "end": 33
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 33
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "X",
        "optional": false,
        "typeAnnotation": null,
        "start": 136,
        "end": 137
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Test",
        "optional": false,
        "typeAnnotation": null,
        "start": 146,
        "end": 150
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 205,
              "end": 216
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "options",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 217,
                  "end": 224
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Super",
                        "start": 236,
                        "end": 241
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 236,
                      "end": 243
                    },
                    "directive": null,
                    "start": 236,
                    "end": 244
                  },
                  {
                    "type": "IfStatement",
                    "test": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "options",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 257,
                        "end": 264
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "test",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 265,
                        "end": 269
                      },
                      "optional": false,
                      "computed": false,
                      "start": 257,
                      "end": 269
                    },
                    "consequent": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "AssignmentExpression",
                            "operator": "=",
                            "left": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "ThisExpression",
                                "start": 285,
                                "end": 289
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "test",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 290,
                                "end": 294
                              },
                              "optional": false,
                              "computed": false,
                              "start": 285,
                              "end": 294
                            },
                            "right": {
                              "type": "NewExpression",
                              "callee": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "options",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 301,
                                  "end": 308
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "test",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 309,
                                  "end": 313
                                },
                                "optional": false,
                                "computed": false,
                                "start": 301,
                                "end": 313
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "start": 297,
                              "end": 315
                            },
                            "start": 285,
                            "end": 315
                          },
                          "directive": null,
                          "start": 285,
                          "end": 316
                        }
                      ],
                      "start": 271,
                      "end": 326
                    },
                    "alternate": null,
                    "start": 253,
                    "end": 326
                  }
                ],
                "start": 226,
                "end": 332
              },
              "expression": false,
              "start": 216,
              "end": 332
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 205,
            "end": 332
          }
        ],
        "start": 151,
        "end": 334
      },
      "abstract": false,
      "declare": false,
      "start": 130,
      "end": 334
    },
    {
      "type": "ExportDefaultDeclaration",
      "declaration": {
        "type": "Identifier",
        "decorators": [],
        "name": "X",
        "optional": false,
        "typeAnnotation": null,
        "start": 351,
        "end": 352
      },
      "exportKind": "value",
      "start": 336,
      "end": 353
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 353
}
```
