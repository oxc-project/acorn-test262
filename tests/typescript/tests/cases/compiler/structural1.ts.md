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
        "start": 10,
        "end": 11
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "I",
                "optional": false,
                "typeAnnotation": null,
                "start": 35,
                "end": 36
              },
              "typeParameters": null,
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "body": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "salt",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 47,
                      "end": 51
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 52,
                        "end": 58
                      },
                      "start": 51,
                      "end": 58
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 47,
                    "end": 59
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "pepper",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 68,
                      "end": 74
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 75,
                        "end": 81
                      },
                      "start": 74,
                      "end": 81
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 68,
                    "end": 82
                  }
                ],
                "start": 37,
                "end": 88
              },
              "declare": false,
              "start": 25,
              "end": 88
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 18,
            "end": 88
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "FunctionDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "f",
                "optional": false,
                "typeAnnotation": null,
                "start": 110,
                "end": 111
              },
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "i",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "I",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 114,
                        "end": 115
                      },
                      "typeArguments": null,
                      "start": 114,
                      "end": 115
                    },
                    "start": 113,
                    "end": 115
                  },
                  "start": 112,
                  "end": 115
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 117,
                "end": 124
              },
              "expression": false,
              "start": 101,
              "end": 124
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 94,
            "end": 124
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "f",
                "optional": false,
                "typeAnnotation": null,
                "start": 130,
                "end": 131
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "salt",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 133,
                        "end": 137
                      },
                      "value": {
                        "type": "Literal",
                        "value": 2,
                        "raw": "2",
                        "start": 138,
                        "end": 139
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 133,
                      "end": 139
                    },
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "pepper",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 140,
                        "end": 146
                      },
                      "value": {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0",
                        "start": 147,
                        "end": 148
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 140,
                      "end": 148
                    }
                  ],
                  "start": 132,
                  "end": 149
                }
              ],
              "optional": false,
              "start": 130,
              "end": 150
            },
            "directive": null,
            "start": 130,
            "end": 151
          }
        ],
        "start": 12,
        "end": 153
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 153
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 153
}
```
