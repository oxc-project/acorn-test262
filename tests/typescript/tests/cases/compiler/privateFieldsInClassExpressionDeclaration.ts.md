__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
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
              "name": "ClassExpression",
              "optional": false,
              "typeAnnotation": null,
              "start": 13,
              "end": 28
            },
            "init": {
              "type": "ClassExpression",
              "decorators": [],
              "id": null,
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [
                  {
                    "type": "PropertyDefinition",
                    "decorators": [],
                    "key": {
                      "type": "PrivateIdentifier",
                      "name": "context",
                      "start": 43,
                      "end": 51
                    },
                    "typeAnnotation": null,
                    "value": {
                      "type": "Literal",
                      "value": 0,
                      "raw": "0",
                      "start": 54,
                      "end": 55
                    },
                    "computed": false,
                    "static": false,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": null,
                    "start": 43,
                    "end": 56
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "PrivateIdentifier",
                      "name": "method",
                      "start": 61,
                      "end": 68
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "Literal",
                              "value": 42,
                              "raw": "42",
                              "start": 80,
                              "end": 82
                            },
                            "start": 73,
                            "end": 83
                          }
                        ],
                        "start": 71,
                        "end": 85
                      },
                      "expression": false,
                      "start": 68,
                      "end": 85
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 61,
                    "end": 85
                  },
                  {
                    "type": "PropertyDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "value",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 97,
                      "end": 102
                    },
                    "typeAnnotation": null,
                    "value": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 105,
                      "end": 106
                    },
                    "computed": false,
                    "static": false,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": "public",
                    "start": 90,
                    "end": 107
                  }
                ],
                "start": 37,
                "end": 109
              },
              "abstract": false,
              "declare": false,
              "start": 31,
              "end": 109
            },
            "definite": false,
            "start": 13,
            "end": 109
          }
        ],
        "declare": false,
        "start": 7,
        "end": 110
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 110
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
              "name": "ClassExpressionStatic",
              "optional": false,
              "typeAnnotation": null,
              "start": 171,
              "end": 192
            },
            "init": {
              "type": "ClassExpression",
              "decorators": [],
              "id": null,
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [
                  {
                    "type": "PropertyDefinition",
                    "decorators": [],
                    "key": {
                      "type": "PrivateIdentifier",
                      "name": "staticPrivate",
                      "start": 214,
                      "end": 228
                    },
                    "typeAnnotation": null,
                    "value": {
                      "type": "Literal",
                      "value": "hidden",
                      "raw": "\"hidden\"",
                      "start": 231,
                      "end": 239
                    },
                    "computed": false,
                    "static": true,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": null,
                    "start": 207,
                    "end": 240
                  },
                  {
                    "type": "PropertyDefinition",
                    "decorators": [],
                    "key": {
                      "type": "PrivateIdentifier",
                      "name": "instancePrivate",
                      "start": 245,
                      "end": 261
                    },
                    "typeAnnotation": null,
                    "value": {
                      "type": "Literal",
                      "value": true,
                      "raw": "true",
                      "start": 264,
                      "end": 268
                    },
                    "computed": false,
                    "static": false,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": null,
                    "start": 245,
                    "end": 269
                  },
                  {
                    "type": "PropertyDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "exposed",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 281,
                      "end": 288
                    },
                    "typeAnnotation": null,
                    "value": {
                      "type": "Literal",
                      "value": "visible",
                      "raw": "\"visible\"",
                      "start": 291,
                      "end": 300
                    },
                    "computed": false,
                    "static": false,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": "public",
                    "start": 274,
                    "end": 301
                  }
                ],
                "start": 201,
                "end": 303
              },
              "abstract": false,
              "declare": false,
              "start": 195,
              "end": 303
            },
            "definite": false,
            "start": 171,
            "end": 303
          }
        ],
        "declare": false,
        "start": 165,
        "end": 304
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 158,
      "end": 304
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 304
}
```
