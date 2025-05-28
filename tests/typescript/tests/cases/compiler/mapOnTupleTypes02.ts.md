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
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 7,
        "end": 37,
        "id": {
          "type": "Identifier",
          "start": 12,
          "end": 17,
          "decorators": [],
          "name": "Point",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null,
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
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 39,
      "end": 114,
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 46,
        "end": 114,
        "id": {
          "type": "Identifier",
          "start": 55,
          "end": 64,
          "decorators": [],
          "name": "increment",
          "optional": false,
          "typeAnnotation": null
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
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
                "typeName": {
                  "type": "Identifier",
                  "start": 72,
                  "end": 77,
                  "decorators": [],
                  "name": "Point",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          }
        ],
        "returnType": null,
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
                "callee": {
                  "type": "MemberExpression",
                  "start": 90,
                  "end": 99,
                  "object": {
                    "type": "Identifier",
                    "start": 90,
                    "end": 95,
                    "decorators": [],
                    "name": "point",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 96,
                    "end": 99,
                    "decorators": [],
                    "name": "map",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "ArrowFunctionExpression",
                    "start": 100,
                    "end": 110,
                    "expression": true,
                    "async": false,
                    "typeParameters": null,
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
                    "body": {
                      "type": "BinaryExpression",
                      "start": 105,
                      "end": 110,
                      "left": {
                        "type": "Identifier",
                        "start": 105,
                        "end": 106,
                        "decorators": [],
                        "name": "d",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "operator": "+",
                      "right": {
                        "type": "Literal",
                        "start": 109,
                        "end": 110,
                        "value": 1,
                        "raw": "1"
                      }
                    },
                    "id": null,
                    "generator": false
                  }
                ],
                "optional": false
              }
            }
          ]
        },
        "expression": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
