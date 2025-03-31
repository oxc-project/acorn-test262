__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 167,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 167,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 8,
        "name": "M",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 9,
        "end": 167,
        "body": [
          {
            "type": "ClassDeclaration",
            "start": 15,
            "end": 87,
            "id": {
              "type": "Identifier",
              "start": 21,
              "end": 22,
              "name": "S",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "superClass": null,
            "body": {
              "type": "ClassBody",
              "start": 23,
              "end": 87,
              "body": [
                {
                  "type": "MethodDefinition",
                  "start": 33,
                  "end": 81,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 33,
                    "end": 42,
                    "name": "decorator",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "kind": "method",
                  "value": {
                    "type": "FunctionExpression",
                    "start": 42,
                    "end": 81,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 43,
                        "end": 57,
                        "name": "target",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 49,
                          "end": 57,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 51,
                            "end": 57,
                            "typeName": {
                              "type": "Identifier",
                              "start": 51,
                              "end": 57,
                              "name": "Object",
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
                      {
                        "type": "Identifier",
                        "start": 59,
                        "end": 70,
                        "name": "key",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 62,
                          "end": 70,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 64,
                            "end": 70
                          }
                        },
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "body": {
                      "type": "BlockStatement",
                      "start": 78,
                      "end": 81,
                      "body": []
                    },
                    "declare": false,
                    "typeParameters": null,
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 71,
                      "end": 77,
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 73,
                        "end": 77
                      }
                    }
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
            "implements": [],
            "abstract": false,
            "declare": false,
            "superTypeArguments": null
          },
          {
            "type": "ClassDeclaration",
            "start": 92,
            "end": 165,
            "id": {
              "type": "Identifier",
              "start": 98,
              "end": 99,
              "name": "C",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "superClass": {
              "type": "Identifier",
              "start": 108,
              "end": 109,
              "name": "S",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "body": {
              "type": "ClassBody",
              "start": 110,
              "end": 165,
              "body": [
                {
                  "type": "MethodDefinition",
                  "start": 120,
                  "end": 159,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 147,
                    "end": 153,
                    "name": "method",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "kind": "method",
                  "value": {
                    "type": "FunctionExpression",
                    "start": 153,
                    "end": 159,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [],
                    "body": {
                      "type": "BlockStatement",
                      "start": 156,
                      "end": 159,
                      "body": []
                    },
                    "declare": false,
                    "typeParameters": null,
                    "returnType": null
                  },
                  "decorators": [
                    {
                      "type": "Decorator",
                      "start": 120,
                      "end": 138,
                      "expression": {
                        "type": "MemberExpression",
                        "start": 122,
                        "end": 137,
                        "object": {
                          "type": "Super",
                          "start": 122,
                          "end": 127
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 128,
                          "end": 137,
                          "name": "decorator",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      }
                    }
                  ],
                  "override": false,
                  "optional": false,
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
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
