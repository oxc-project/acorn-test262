__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 199,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 196,
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "name": "B",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 196,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 14,
            "end": 130,
            "static": false,
            "computed": false,
            "key": {
              "type": "PrivateIdentifier",
              "start": 14,
              "end": 18,
              "name": "foo"
            },
            "value": {
              "type": "ClassExpression",
              "start": 21,
              "end": 129,
              "id": null,
              "superClass": null,
              "body": {
                "type": "ClassBody",
                "start": 27,
                "end": 129,
                "body": [
                  {
                    "type": "MethodDefinition",
                    "start": 37,
                    "end": 96,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 37,
                      "end": 48,
                      "name": "constructor",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "constructor",
                    "value": {
                      "type": "FunctionExpression",
                      "start": 48,
                      "end": 96,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [],
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
                                  "name": "console",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 73,
                                  "end": 76,
                                  "name": "log",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "computed": false,
                                "optional": false
                              },
                              "arguments": [
                                {
                                  "type": "Literal",
                                  "start": 77,
                                  "end": 84,
                                  "value": "hello",
                                  "raw": "\"hello\""
                                }
                              ],
                              "optional": false,
                              "typeArguments": null
                            },
                            "directive": null
                          }
                        ]
                      },
                      "declare": false,
                      "typeParameters": null,
                      "returnType": null
                    },
                    "decorators": [],
                    "override": false,
                    "optional": false,
                    "accessibility": null
                  },
                  {
                    "type": "PropertyDefinition",
                    "start": 105,
                    "end": 123,
                    "static": true,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 112,
                      "end": 116,
                      "name": "test",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Literal",
                      "start": 119,
                      "end": 122,
                      "value": 123,
                      "raw": "123"
                    },
                    "decorators": [],
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "typeAnnotation": null,
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
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 135,
            "end": 194,
            "static": false,
            "computed": false,
            "key": {
              "type": "PrivateIdentifier",
              "start": 135,
              "end": 140,
              "name": "foo2"
            },
            "value": {
              "type": "ClassExpression",
              "start": 143,
              "end": 193,
              "id": {
                "type": "Identifier",
                "start": 149,
                "end": 152,
                "name": "Foo",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "superClass": null,
              "body": {
                "type": "ClassBody",
                "start": 153,
                "end": 193,
                "body": [
                  {
                    "type": "PropertyDefinition",
                    "start": 163,
                    "end": 187,
                    "static": true,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 170,
                      "end": 180,
                      "name": "otherClass",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Literal",
                      "start": 183,
                      "end": 186,
                      "value": 123,
                      "raw": "123"
                    },
                    "decorators": [],
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "typeAnnotation": null,
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
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
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
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
