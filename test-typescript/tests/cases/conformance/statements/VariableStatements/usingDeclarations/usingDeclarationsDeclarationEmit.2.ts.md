__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 150,
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
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 8,
            "name": "r1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                "method": true,
                "shorthand": false,
                "computed": true,
                "key": {
                  "type": "MemberExpression",
                  "start": 14,
                  "end": 28,
                  "object": {
                    "type": "Identifier",
                    "start": 14,
                    "end": 20,
                    "name": "Symbol",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 21,
                    "end": 28,
                    "name": "dispose",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                },
                "value": {
                  "type": "FunctionExpression",
                  "start": 29,
                  "end": 34,
                  "id": null,
                  "expression": false,
                  "generator": false,
                  "async": false,
                  "params": [],
                  "body": {
                    "type": "BlockStatement",
                    "start": 32,
                    "end": 34,
                    "body": []
                  },
                  "declare": false,
                  "typeParameters": null,
                  "returnType": null
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "using",
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
          "name": "R1",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
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
            "name": "r1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        },
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "type"
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
          "id": {
            "type": "Identifier",
            "start": 79,
            "end": 81,
            "name": "r2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                "method": true,
                "shorthand": false,
                "computed": true,
                "key": {
                  "type": "MemberExpression",
                  "start": 93,
                  "end": 112,
                  "object": {
                    "type": "Identifier",
                    "start": 93,
                    "end": 99,
                    "name": "Symbol",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 100,
                    "end": 112,
                    "name": "asyncDispose",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                },
                "value": {
                  "type": "FunctionExpression",
                  "start": 113,
                  "end": 118,
                  "id": null,
                  "expression": false,
                  "generator": false,
                  "async": true,
                  "params": [],
                  "body": {
                    "type": "BlockStatement",
                    "start": 116,
                    "end": 118,
                    "body": []
                  },
                  "declare": false,
                  "typeParameters": null,
                  "returnType": null
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "await using",
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
          "name": "R2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
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
            "name": "r2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        },
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "type"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
