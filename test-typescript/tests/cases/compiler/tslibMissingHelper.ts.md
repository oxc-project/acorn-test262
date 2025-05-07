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
  "start": 0,
  "end": 50,
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
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 30,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 29,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 7,
        "end": 29,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 13,
            "end": 28,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 13,
              "end": 28,
              "decorators": [],
              "name": "notAHelper",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 23,
                "end": 28,
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 25,
                  "end": 28
                }
              }
            },
            "init": null
          }
        ],
        "declare": false,
        "kind": "const"
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
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 30,
  "body": [
    {
      "type": "ExpressionStatement",
      "start": 0,
      "end": 30,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 0,
        "end": 29,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 0,
          "end": 25,
          "computed": false,
          "object": {
            "type": "MemberExpression",
            "start": 0,
            "end": 14,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 0,
              "end": 6,
              "decorators": [],
              "name": "module",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 7,
              "end": 14,
              "decorators": [],
              "name": "exports",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 15,
            "end": 25,
            "decorators": [],
            "name": "notAHelper",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Literal",
          "start": 28,
          "end": 29,
          "raw": "3",
          "value": 3,
          "regex": null,
          "bigint": null
        }
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
