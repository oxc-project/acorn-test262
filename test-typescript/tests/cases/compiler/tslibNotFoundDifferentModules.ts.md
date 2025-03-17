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
      "declaration": null,
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "FunctionDeclaration",
      "start": 11,
      "end": 49,
      "id": {
        "type": "Identifier",
        "start": 26,
        "end": 29,
        "name": "foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": true,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 47,
        "end": 49,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 31,
        "end": 46,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 33,
          "end": 46,
          "typeName": {
            "type": "Identifier",
            "start": 33,
            "end": 40,
            "name": "Promise",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
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
          }
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 50,
      "end": 88,
      "id": {
        "type": "Identifier",
        "start": 65,
        "end": 68,
        "name": "bar",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": true,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 86,
        "end": 88,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 70,
        "end": 85,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 72,
          "end": 85,
          "typeName": {
            "type": "Identifier",
            "start": 72,
            "end": 79,
            "name": "Promise",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
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
          }
        }
      }
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
      "declaration": {
        "type": "TSDeclareFunction",
        "start": 411,
        "end": 508,
        "id": {
          "type": "Identifier",
          "start": 428,
          "end": 437,
          "name": "__awaiter",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "expression": false,
        "generator": false,
        "async": false,
        "params": [
          {
            "type": "Identifier",
            "start": 438,
            "end": 450,
            "name": "thisArg",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 445,
              "end": 450,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 447,
                "end": 450
              }
            },
            "decorators": [],
            "optional": false
          },
          {
            "type": "Identifier",
            "start": 452,
            "end": 467,
            "name": "_arguments",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 462,
              "end": 467,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 464,
                "end": 467
              }
            },
            "decorators": [],
            "optional": false
          },
          {
            "type": "Identifier",
            "start": 469,
            "end": 480,
            "name": "P",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 470,
              "end": 480,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 472,
                "end": 480,
                "typeName": {
                  "type": "Identifier",
                  "start": 472,
                  "end": 480,
                  "name": "Function",
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
            "start": 482,
            "end": 501,
            "name": "generator",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 491,
              "end": 501,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 493,
                "end": 501,
                "typeName": {
                  "type": "Identifier",
                  "start": 493,
                  "end": 501,
                  "name": "Function",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          }
        ],
        "body": null,
        "declare": true,
        "typeParameters": null,
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 502,
          "end": 507,
          "typeAnnotation": {
            "type": "TSAnyKeyword",
            "start": 504,
            "end": 507
          }
        }
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "type"
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
      "declaration": null,
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "FunctionDeclaration",
      "start": 11,
      "end": 49,
      "id": {
        "type": "Identifier",
        "start": 26,
        "end": 29,
        "name": "foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": true,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 47,
        "end": 49,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 31,
        "end": 46,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 33,
          "end": 46,
          "typeName": {
            "type": "Identifier",
            "start": 33,
            "end": 40,
            "name": "Promise",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
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
          }
        }
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
