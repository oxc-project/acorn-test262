__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 131,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 32,
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
        "end": 32,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 11,
            "end": 30,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 18,
              "end": 30,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 24,
                "end": 26,
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
                "start": 27,
                "end": 30,
                "body": []
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
    },
    {
      "type": "TSModuleDeclaration",
      "start": 33,
      "end": 131,
      "id": {
        "type": "Identifier",
        "start": 40,
        "end": 41,
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 42,
        "end": 131,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 48,
            "end": 81,
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 55,
              "end": 81,
              "id": {
                "type": "Identifier",
                "start": 65,
                "end": 66,
                "decorators": [],
                "name": "I",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": null,
              "extends": [],
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
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 69,
                      "end": 70,
                      "decorators": [],
                      "name": "n",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 70,
                      "end": 78,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 72,
                        "end": 78
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
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 86,
            "end": 129,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 93,
              "end": 129,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 99,
                "end": 101,
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
                "start": 102,
                "end": 129,
                "body": [
                  {
                    "type": "MethodDefinition",
                    "start": 104,
                    "end": 127,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 104,
                      "end": 105,
                      "decorators": [],
                      "name": "f",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "start": 105,
                      "end": 127,
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
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
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        }
                      },
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
