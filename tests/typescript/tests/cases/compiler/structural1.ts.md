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
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "I",
                "optional": false,
                "typeAnnotation": null,
                "start": 32,
                "end": 33
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
                      "start": 44,
                      "end": 48
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 49,
                        "end": 55
                      },
                      "start": 48,
                      "end": 55
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 44,
                    "end": 56
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
                      "start": 65,
                      "end": 71
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 72,
                        "end": 78
                      },
                      "start": 71,
                      "end": 78
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 65,
                    "end": 79
                  }
                ],
                "start": 34,
                "end": 85
              },
              "declare": false,
              "start": 22,
              "end": 85
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 15,
            "end": 85
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
                "start": 107,
                "end": 108
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
                        "start": 111,
                        "end": 112
                      },
                      "typeArguments": null,
                      "start": 111,
                      "end": 112
                    },
                    "start": 110,
                    "end": 112
                  },
                  "start": 109,
                  "end": 112
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 114,
                "end": 121
              },
              "expression": false,
              "start": 98,
              "end": 121
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 91,
            "end": 121
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
                "start": 127,
                "end": 128
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
                        "start": 130,
                        "end": 134
                      },
                      "value": {
                        "type": "Literal",
                        "value": 2,
                        "raw": "2",
                        "start": 135,
                        "end": 136
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 130,
                      "end": 136
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
                        "start": 137,
                        "end": 143
                      },
                      "value": {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0",
                        "start": 144,
                        "end": 145
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 137,
                      "end": 145
                    }
                  ],
                  "start": 129,
                  "end": 146
                }
              ],
              "optional": false,
              "start": 127,
              "end": 147
            },
            "directive": null,
            "start": 127,
            "end": 148
          }
        ],
        "start": 9,
        "end": 150
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 150
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 150
}
```
