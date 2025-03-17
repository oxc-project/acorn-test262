__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 89,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 10,
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "FunctionDeclaration",
      "start": 11,
      "end": 49,
      "async": true,
      "body": {
        "type": "BlockStatement",
        "start": 47,
        "end": 49,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 26,
        "end": 29,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 31,
        "end": 46,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 33,
          "end": 46,
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 40,
            "end": 46,
            "params": [
              {
                "type": "TSVoidKeyword",
                "start": 41,
                "end": 45
              }
            ]
          },
          "typeName": {
            "type": "Identifier",
            "start": 33,
            "end": 40,
            "decorators": [],
            "name": "Promise",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 50,
      "end": 88,
      "async": true,
      "body": {
        "type": "BlockStatement",
        "start": 86,
        "end": 88,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 65,
        "end": 68,
        "decorators": [],
        "name": "bar",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 70,
        "end": 85,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 72,
          "end": 85,
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 79,
            "end": 85,
            "params": [
              {
                "type": "TSVoidKeyword",
                "start": 80,
                "end": 84
              }
            ]
          },
          "typeName": {
            "type": "Identifier",
            "start": 72,
            "end": 79,
            "decorators": [],
            "name": "Promise",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 404,
  "end": 509,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 404,
      "end": 508,
      "attributes": [],
      "declaration": {
        "type": "TSDeclareFunction",
        "start": 411,
        "end": 508,
        "async": false,
        "body": null,
        "declare": true,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 428,
          "end": 437,
          "decorators": [],
          "name": "__awaiter",
          "optional": false,
          "typeAnnotation": null
        },
        "params": [
          {
            "type": "Identifier",
            "start": 438,
            "end": 450,
            "decorators": [],
            "name": "thisArg",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 445,
              "end": 450,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 447,
                "end": 450
              }
            }
          },
          {
            "type": "Identifier",
            "start": 452,
            "end": 467,
            "decorators": [],
            "name": "_arguments",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 462,
              "end": 467,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 464,
                "end": 467
              }
            }
          },
          {
            "type": "Identifier",
            "start": 469,
            "end": 480,
            "decorators": [],
            "name": "P",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 470,
              "end": 480,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 472,
                "end": 480,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 472,
                  "end": 480,
                  "decorators": [],
                  "name": "Function",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          {
            "type": "Identifier",
            "start": 482,
            "end": 501,
            "decorators": [],
            "name": "generator",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 491,
              "end": 501,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 493,
                "end": 501,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 493,
                  "end": 501,
                  "decorators": [],
                  "name": "Function",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 502,
          "end": 507,
          "typeAnnotation": {
            "type": "TSAnyKeyword",
            "start": 504,
            "end": 507
          }
        },
        "typeParameters": null
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 49,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 10,
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "FunctionDeclaration",
      "start": 11,
      "end": 49,
      "async": true,
      "body": {
        "type": "BlockStatement",
        "start": 47,
        "end": 49,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 26,
        "end": 29,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 31,
        "end": 46,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 33,
          "end": 46,
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 40,
            "end": 46,
            "params": [
              {
                "type": "TSVoidKeyword",
                "start": 41,
                "end": 45
              }
            ]
          },
          "typeName": {
            "type": "Identifier",
            "start": 33,
            "end": 40,
            "decorators": [],
            "name": "Promise",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
