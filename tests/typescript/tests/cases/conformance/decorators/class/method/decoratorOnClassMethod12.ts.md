__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null,
        "start": 7,
        "end": 8
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "S",
              "optional": false,
              "typeAnnotation": null,
              "start": 21,
              "end": 22
            },
            "typeParameters": null,
            "superClass": null,
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
                    "name": "decorator",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 33,
                    "end": 42
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
                        "name": "target",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Object",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 51,
                              "end": 57
                            },
                            "typeArguments": null,
                            "start": 51,
                            "end": 57
                          },
                          "start": 49,
                          "end": 57
                        },
                        "start": 43,
                        "end": 57
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "key",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 64,
                            "end": 70
                          },
                          "start": 62,
                          "end": 70
                        },
                        "start": 59,
                        "end": 70
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 73,
                        "end": 77
                      },
                      "start": 71,
                      "end": 77
                    },
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 78,
                      "end": 81
                    },
                    "expression": false,
                    "start": 42,
                    "end": 81
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 33,
                  "end": 81
                }
              ],
              "start": 23,
              "end": 87
            },
            "abstract": false,
            "declare": false,
            "start": 15,
            "end": 87
          },
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null,
              "start": 98,
              "end": 99
            },
            "typeParameters": null,
            "superClass": {
              "type": "Identifier",
              "decorators": [],
              "name": "S",
              "optional": false,
              "typeAnnotation": null,
              "start": 108,
              "end": 109
            },
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "body": [
                {
                  "type": "MethodDefinition",
                  "decorators": [
                    {
                      "type": "Decorator",
                      "expression": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Super",
                          "start": 122,
                          "end": 127
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "decorator",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 128,
                          "end": 137
                        },
                        "optional": false,
                        "computed": false,
                        "start": 122,
                        "end": 137
                      },
                      "start": 120,
                      "end": 138
                    }
                  ],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "method",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 147,
                    "end": 153
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
                      "body": [],
                      "start": 156,
                      "end": 159
                    },
                    "expression": false,
                    "start": 153,
                    "end": 159
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 120,
                  "end": 159
                }
              ],
              "start": 110,
              "end": 165
            },
            "abstract": false,
            "declare": false,
            "start": 92,
            "end": 165
          }
        ],
        "start": 9,
        "end": 167
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 167
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 167
}
```
