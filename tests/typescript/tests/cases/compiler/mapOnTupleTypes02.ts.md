__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 114,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 37,
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 7,
        "end": 37,
        "declare": false,
        "id": {
          "type": "Identifier",
          "start": 12,
          "end": 17,
          "decorators": [],
          "name": "Point",
          "optional": false,
          "typeAnnotation": null
        },
        "typeAnnotation": {
          "type": "TSTupleType",
          "start": 20,
          "end": 36,
          "elementTypes": [
            {
              "type": "TSNumberKeyword",
              "start": 21,
              "end": 27
            },
            {
              "type": "TSNumberKeyword",
              "start": 29,
              "end": 35
            }
          ]
        },
        "typeParameters": null
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 39,
      "end": 114,
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 46,
        "end": 114,
        "async": false,
        "body": {
          "type": "BlockStatement",
          "start": 79,
          "end": 114,
          "body": [
            {
              "type": "ReturnStatement",
              "start": 83,
              "end": 112,
              "argument": {
                "type": "CallExpression",
                "start": 90,
                "end": 111,
                "arguments": [
                  {
                    "type": "ArrowFunctionExpression",
                    "start": 100,
                    "end": 110,
                    "async": false,
                    "body": {
                      "type": "BinaryExpression",
                      "start": 105,
                      "end": 110,
                      "operator": "+",
                      "left": {
                        "type": "Identifier",
                        "start": 105,
                        "end": 106,
                        "decorators": [],
                        "name": "d",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "right": {
                        "type": "Literal",
                        "start": 109,
                        "end": 110,
                        "raw": "1",
                        "value": 1
                      }
                    },
                    "expression": true,
                    "generator": false,
                    "id": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 100,
                        "end": 101,
                        "decorators": [],
                        "name": "d",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    ],
                    "returnType": null,
                    "typeParameters": null
                  }
                ],
                "callee": {
                  "type": "MemberExpression",
                  "start": 90,
                  "end": 99,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 90,
                    "end": 95,
                    "decorators": [],
                    "name": "point",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 96,
                    "end": 99,
                    "decorators": [],
                    "name": "map",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "optional": false,
                "typeArguments": null
              }
            }
          ]
        },
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 55,
          "end": 64,
          "decorators": [],
          "name": "increment",
          "optional": false,
          "typeAnnotation": null
        },
        "params": [
          {
            "type": "Identifier",
            "start": 65,
            "end": 77,
            "decorators": [],
            "name": "point",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 70,
              "end": 77,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 72,
                "end": 77,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 72,
                  "end": 77,
                  "decorators": [],
                  "name": "Point",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          }
        ],
        "returnType": null,
        "typeParameters": null
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
