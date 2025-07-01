__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 145,
            "end": 148
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 152,
                "end": 153
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "IfStatement",
                  "test": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 188,
                        "end": 189
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 191,
                        "end": 192
                      },
                      "optional": false,
                      "computed": false,
                      "start": 187,
                      "end": 192
                    },
                    "operator": "!==",
                    "right": {
                      "type": "Literal",
                      "value": 0,
                      "raw": "0",
                      "start": 197,
                      "end": 198
                    },
                    "start": 187,
                    "end": 198
                  },
                  "consequent": {
                    "type": "ThrowStatement",
                    "argument": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "TypeError",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 206,
                        "end": 215
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 206,
                      "end": 217
                    },
                    "start": 200,
                    "end": 218
                  },
                  "alternate": null,
                  "start": 164,
                  "end": 218
                },
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "undefined",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 230,
                    "end": 239
                  },
                  "start": 223,
                  "end": 240
                }
              ],
              "start": 158,
              "end": 242
            },
            "id": null,
            "generator": false,
            "start": 151,
            "end": 242
          },
          "definite": false,
          "start": 145,
          "end": 242
        }
      ],
      "declare": false,
      "start": 139,
      "end": 243
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "main",
              "optional": false,
              "typeAnnotation": null,
              "start": 258,
              "end": 262
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "expression": false,
              "async": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "kind": "const",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 306,
                          "end": 307
                        },
                        "init": {
                          "type": "ObjectExpression",
                          "properties": [
                            {
                              "type": "Property",
                              "kind": "init",
                              "key": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 312,
                                "end": 313
                              },
                              "value": {
                                "type": "Literal",
                                "value": 1,
                                "raw": "1",
                                "start": 315,
                                "end": 316
                              },
                              "method": false,
                              "shorthand": false,
                              "computed": false,
                              "optional": false,
                              "start": 312,
                              "end": 316
                            }
                          ],
                          "start": 310,
                          "end": 318
                        },
                        "definite": false,
                        "start": 306,
                        "end": 318
                      }
                    ],
                    "declare": false,
                    "start": 300,
                    "end": 319
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 324,
                        "end": 327
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 328,
                          "end": 329
                        }
                      ],
                      "optional": false,
                      "start": 324,
                      "end": 330
                    },
                    "directive": null,
                    "start": 324,
                    "end": 331
                  }
                ],
                "start": 271,
                "end": 333
              },
              "id": null,
              "generator": false,
              "start": 265,
              "end": 333
            },
            "definite": false,
            "start": 258,
            "end": 333
          }
        ],
        "declare": false,
        "start": 252,
        "end": 334
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 245,
      "end": 334
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 139,
  "end": 334
}
```
