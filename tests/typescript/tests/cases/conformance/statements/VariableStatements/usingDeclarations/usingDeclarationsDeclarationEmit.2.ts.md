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
      "kind": "using",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 36,
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
                "kind": "init",
                "key": {
                  "type": "MemberExpression",
                  "start": 14,
                  "end": 28,
                  "object": {
                    "type": "Identifier",
                    "start": 14,
                    "end": 20,
                    "decorators": [],
                    "name": "Symbol",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 21,
                    "end": 28,
                    "decorators": [],
                    "name": "dispose",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "value": {
                  "type": "FunctionExpression",
                  "start": 29,
                  "end": 34,
                  "id": null,
                  "generator": false,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "start": 32,
                    "end": 34,
                    "body": []
                  },
                  "expression": false
                },
                "method": true,
                "shorthand": false,
                "computed": true,
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 38,
      "end": 65,
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 45,
        "end": 65,
        "id": {
          "type": "Identifier",
          "start": 50,
          "end": 52,
          "decorators": [],
          "name": "R1",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null,
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
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": []
    },
    {
      "type": "VariableDeclaration",
      "start": 67,
      "end": 121,
      "kind": "await using",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 79,
          "end": 120,
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
                "kind": "init",
                "key": {
                  "type": "MemberExpression",
                  "start": 93,
                  "end": 112,
                  "object": {
                    "type": "Identifier",
                    "start": 93,
                    "end": 99,
                    "decorators": [],
                    "name": "Symbol",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 100,
                    "end": 112,
                    "decorators": [],
                    "name": "asyncDispose",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "value": {
                  "type": "FunctionExpression",
                  "start": 113,
                  "end": 118,
                  "id": null,
                  "generator": false,
                  "async": true,
                  "declare": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "start": 116,
                    "end": 118,
                    "body": []
                  },
                  "expression": false
                },
                "method": true,
                "shorthand": false,
                "computed": true,
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 122,
      "end": 149,
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 129,
        "end": 149,
        "id": {
          "type": "Identifier",
          "start": 134,
          "end": 136,
          "decorators": [],
          "name": "R2",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null,
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
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
