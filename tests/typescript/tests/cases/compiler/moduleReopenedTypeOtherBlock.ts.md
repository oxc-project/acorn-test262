__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 135,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 74,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 8,
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 9,
        "end": 74,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 15,
            "end": 34,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 22,
              "end": 34,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 28,
                "end": 30,
                "decorators": [],
                "name": "C1",
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
                "end": 34,
                "body": []
              },
              "abstract": false,
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 39,
            "end": 72,
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 46,
              "end": 72,
              "id": {
                "type": "Identifier",
                "start": 56,
                "end": 57,
                "decorators": [],
                "name": "I",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": null,
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "start": 58,
                "end": 72,
                "body": [
                  {
                    "type": "TSPropertySignature",
                    "start": 60,
                    "end": 70,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 60,
                      "end": 61,
                      "decorators": [],
                      "name": "n",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 61,
                      "end": 69,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 63,
                        "end": 69
                      }
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
              },
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": []
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 75,
      "end": 135,
      "id": {
        "type": "Identifier",
        "start": 82,
        "end": 83,
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 84,
        "end": 135,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 90,
            "end": 133,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 97,
              "end": 133,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 103,
                "end": 105,
                "decorators": [],
                "name": "C2",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "start": 106,
                "end": 133,
                "body": [
                  {
                    "type": "MethodDefinition",
                    "start": 108,
                    "end": 131,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 108,
                      "end": 109,
                      "decorators": [],
                      "name": "f",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "start": 109,
                      "end": 131,
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 111,
                        "end": 114,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 113,
                          "end": 114,
                          "typeName": {
                            "type": "Identifier",
                            "start": 113,
                            "end": 114,
                            "decorators": [],
                            "name": "I",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        }
                      },
                      "body": {
                        "type": "BlockStatement",
                        "start": 115,
                        "end": 131,
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "start": 117,
                            "end": 129,
                            "argument": {
                              "type": "Literal",
                              "start": 124,
                              "end": 128,
                              "value": null,
                              "raw": "null"
                            }
                          }
                        ]
                      },
                      "expression": false
                    },
                    "kind": "method",
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
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
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
