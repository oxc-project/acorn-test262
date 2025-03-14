moduleReopenedTypeSameBlock.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 132,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 32,
      "body": {
        "type": "TSModuleBlock",
        "start": 9,
        "end": 32,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 11,
            "end": 30,
            "attributes": [],
            "declaration": {
              "type": "ClassDeclaration",
              "start": 18,
              "end": 30,
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "start": 27,
                "end": 30,
                "body": []
              },
              "declare": false,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 24,
                "end": 26,
                "decorators": [],
                "name": "C1",
                "optional": false
              },
              "implements": [],
              "superClass": null
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 8,
        "decorators": [],
        "name": "M",
        "optional": false
      },
      "kind": "module"
    },
    {
      "type": "TSModuleDeclaration",
      "start": 33,
      "end": 131,
      "body": {
        "type": "TSModuleBlock",
        "start": 42,
        "end": 131,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 48,
            "end": 81,
            "attributes": [],
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 55,
              "end": 81,
              "body": {
                "type": "TSInterfaceBody",
                "start": 67,
                "end": 81,
                "body": [
                  {
                    "type": "TSPropertySignature",
                    "start": 69,
                    "end": 79,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 69,
                      "end": 70,
                      "decorators": [],
                      "name": "n",
                      "optional": false
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 70,
                      "end": 78,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 72,
                        "end": 78
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "extends": [],
              "id": {
                "type": "Identifier",
                "start": 65,
                "end": 66,
                "decorators": [],
                "name": "I",
                "optional": false
              }
            },
            "exportKind": "type",
            "source": null,
            "specifiers": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 86,
            "end": 129,
            "attributes": [],
            "declaration": {
              "type": "ClassDeclaration",
              "start": 93,
              "end": 129,
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "start": 102,
                "end": 129,
                "body": [
                  {
                    "type": "MethodDefinition",
                    "start": 104,
                    "end": 127,
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 104,
                      "end": 105,
                      "decorators": [],
                      "name": "f",
                      "optional": false
                    },
                    "kind": "method",
                    "optional": false,
                    "override": false,
                    "static": false,
                    "value": {
                      "type": "FunctionExpression",
                      "start": 105,
                      "end": 127,
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "start": 111,
                        "end": 127,
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "start": 113,
                            "end": 125,
                            "argument": {
                              "type": "Literal",
                              "start": 120,
                              "end": 124,
                              "raw": "null",
                              "value": null
                            }
                          }
                        ]
                      },
                      "declare": false,
                      "expression": false,
                      "generator": false,
                      "id": null,
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 107,
                        "end": 110,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 109,
                          "end": 110,
                          "typeName": {
                            "type": "Identifier",
                            "start": 109,
                            "end": 110,
                            "decorators": [],
                            "name": "I",
                            "optional": false
                          }
                        }
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 99,
                "end": 101,
                "decorators": [],
                "name": "C2",
                "optional": false
              },
              "implements": [],
              "superClass": null
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 40,
        "end": 41,
        "decorators": [],
        "name": "M",
        "optional": false
      },
      "kind": "module"
    }
  ],
  "sourceType": "script"
}
```
