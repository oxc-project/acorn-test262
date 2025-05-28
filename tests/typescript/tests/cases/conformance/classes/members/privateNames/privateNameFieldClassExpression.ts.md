__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 198,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 196,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 196,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 14,
            "end": 130,
            "decorators": [],
            "key": {
              "type": "PrivateIdentifier",
              "start": 14,
              "end": 18,
              "name": "foo"
            },
            "typeAnnotation": null,
            "value": {
              "type": "ClassExpression",
              "start": 21,
              "end": 129,
              "decorators": [],
              "id": null,
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "start": 27,
                "end": 129,
                "body": [
                  {
                    "type": "MethodDefinition",
                    "start": 37,
                    "end": 96,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 37,
                      "end": 48,
                      "decorators": [],
                      "name": "constructor",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "start": 48,
                      "end": 96,
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "start": 51,
                        "end": 96,
                        "body": [
                          {
                            "type": "ExpressionStatement",
                            "start": 65,
                            "end": 86,
                            "expression": {
                              "type": "CallExpression",
                              "start": 65,
                              "end": 85,
                              "callee": {
                                "type": "MemberExpression",
                                "start": 65,
                                "end": 76,
                                "object": {
                                  "type": "Identifier",
                                  "start": 65,
                                  "end": 72,
                                  "decorators": [],
                                  "name": "console",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 73,
                                  "end": 76,
                                  "decorators": [],
                                  "name": "log",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "optional": false,
                                "computed": false
                              },
                              "typeArguments": null,
                              "arguments": [
                                {
                                  "type": "Literal",
                                  "start": 77,
                                  "end": 84,
                                  "value": "hello",
                                  "raw": "\"hello\""
                                }
                              ],
                              "optional": false
                            },
                            "directive": null
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
                  },
                  {
                    "type": "PropertyDefinition",
                    "start": 105,
                    "end": 123,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 112,
                      "end": 116,
                      "decorators": [],
                      "name": "test",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": null,
                    "value": {
                      "type": "Literal",
                      "start": 119,
                      "end": 122,
                      "value": 123,
                      "raw": "123"
                    },
                    "computed": false,
                    "static": true,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": null
                  }
                ]
              },
              "abstract": false,
              "declare": false
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 135,
            "end": 194,
            "decorators": [],
            "key": {
              "type": "PrivateIdentifier",
              "start": 135,
              "end": 140,
              "name": "foo2"
            },
            "typeAnnotation": null,
            "value": {
              "type": "ClassExpression",
              "start": 143,
              "end": 193,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 149,
                "end": 152,
                "decorators": [],
                "name": "Foo",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "start": 153,
                "end": 193,
                "body": [
                  {
                    "type": "PropertyDefinition",
                    "start": 163,
                    "end": 187,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 170,
                      "end": 180,
                      "decorators": [],
                      "name": "otherClass",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": null,
                    "value": {
                      "type": "Literal",
                      "start": 183,
                      "end": 186,
                      "value": 123,
                      "raw": "123"
                    },
                    "computed": false,
                    "static": true,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": null
                  }
                ]
              },
              "abstract": false,
              "declare": false
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
