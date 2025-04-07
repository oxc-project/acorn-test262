__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 149,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 37,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 36,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 8,
            "decorators": [],
            "name": "r1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 11,
            "end": 36,
            "properties": [
              {
                "type": "Property",
                "start": 13,
                "end": 34,
                "computed": true,
                "key": {
                  "type": "MemberExpression",
                  "start": 14,
                  "end": 28,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 14,
                    "end": 20,
                    "decorators": [],
                    "name": "Symbol",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 21,
                    "end": 28,
                    "decorators": [],
                    "name": "dispose",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "kind": "init",
                "method": true,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "start": 29,
                  "end": 34,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 32,
                    "end": 34,
                    "body": []
                  },
                  "declare": false,
                  "expression": false,
                  "generator": false,
                  "id": null,
                  "params": [],
                  "returnType": null,
                  "typeParameters": null
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "using"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 38,
      "end": 65,
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 45,
        "end": 65,
        "declare": false,
        "id": {
          "type": "Identifier",
          "start": 50,
          "end": 52,
          "decorators": [],
          "name": "R1",
          "optional": false,
          "typeAnnotation": null
        },
        "typeAnnotation": {
          "type": "TSTypeQuery",
          "start": 55,
          "end": 64,
          "exprName": {
            "type": "Identifier",
            "start": 62,
            "end": 64,
            "decorators": [],
            "name": "r1",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        },
        "typeParameters": null
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "VariableDeclaration",
      "start": 67,
      "end": 121,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 79,
          "end": 120,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 79,
            "end": 81,
            "decorators": [],
            "name": "r2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 84,
            "end": 120,
            "properties": [
              {
                "type": "Property",
                "start": 86,
                "end": 118,
                "computed": true,
                "key": {
                  "type": "MemberExpression",
                  "start": 93,
                  "end": 112,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 93,
                    "end": 99,
                    "decorators": [],
                    "name": "Symbol",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 100,
                    "end": 112,
                    "decorators": [],
                    "name": "asyncDispose",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "kind": "init",
                "method": true,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "start": 113,
                  "end": 118,
                  "async": true,
                  "body": {
                    "type": "BlockStatement",
                    "start": 116,
                    "end": 118,
                    "body": []
                  },
                  "declare": false,
                  "expression": false,
                  "generator": false,
                  "id": null,
                  "params": [],
                  "returnType": null,
                  "typeParameters": null
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "await using"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 122,
      "end": 149,
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 129,
        "end": 149,
        "declare": false,
        "id": {
          "type": "Identifier",
          "start": 134,
          "end": 136,
          "decorators": [],
          "name": "R2",
          "optional": false,
          "typeAnnotation": null
        },
        "typeAnnotation": {
          "type": "TSTypeQuery",
          "start": 139,
          "end": 148,
          "exprName": {
            "type": "Identifier",
            "start": 146,
            "end": 148,
            "decorators": [],
            "name": "r2",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
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
