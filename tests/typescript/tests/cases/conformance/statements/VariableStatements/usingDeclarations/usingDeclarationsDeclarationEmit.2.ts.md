__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "using",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "r1",
            "optional": false,
            "typeAnnotation": null,
            "start": 6,
            "end": 8
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Symbol",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 14,
                    "end": 20
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "dispose",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 21,
                    "end": 28
                  },
                  "optional": false,
                  "computed": false,
                  "start": 14,
                  "end": 28
                },
                "value": {
                  "type": "FunctionExpression",
                  "id": null,
                  "generator": false,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [],
                    "start": 32,
                    "end": 34
                  },
                  "expression": false,
                  "start": 29,
                  "end": 34
                },
                "method": true,
                "shorthand": false,
                "computed": true,
                "optional": false,
                "start": 13,
                "end": 34
              }
            ],
            "start": 11,
            "end": 36
          },
          "definite": false,
          "start": 6,
          "end": 36
        }
      ],
      "declare": false,
      "start": 0,
      "end": 37
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "R1",
          "optional": false,
          "typeAnnotation": null,
          "start": 50,
          "end": 52
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSTypeQuery",
          "exprName": {
            "type": "Identifier",
            "decorators": [],
            "name": "r1",
            "optional": false,
            "typeAnnotation": null,
            "start": 62,
            "end": 64
          },
          "typeArguments": null,
          "start": 55,
          "end": 64
        },
        "declare": false,
        "start": 45,
        "end": 65
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 38,
      "end": 65
    },
    {
      "type": "VariableDeclaration",
      "kind": "await using",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "r2",
            "optional": false,
            "typeAnnotation": null,
            "start": 79,
            "end": 81
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Symbol",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 93,
                    "end": 99
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "asyncDispose",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 100,
                    "end": 112
                  },
                  "optional": false,
                  "computed": false,
                  "start": 93,
                  "end": 112
                },
                "value": {
                  "type": "FunctionExpression",
                  "id": null,
                  "generator": false,
                  "async": true,
                  "declare": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [],
                    "start": 116,
                    "end": 118
                  },
                  "expression": false,
                  "start": 113,
                  "end": 118
                },
                "method": true,
                "shorthand": false,
                "computed": true,
                "optional": false,
                "start": 86,
                "end": 118
              }
            ],
            "start": 84,
            "end": 120
          },
          "definite": false,
          "start": 79,
          "end": 120
        }
      ],
      "declare": false,
      "start": 67,
      "end": 121
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "R2",
          "optional": false,
          "typeAnnotation": null,
          "start": 134,
          "end": 136
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSTypeQuery",
          "exprName": {
            "type": "Identifier",
            "decorators": [],
            "name": "r2",
            "optional": false,
            "typeAnnotation": null,
            "start": 146,
            "end": 148
          },
          "typeArguments": null,
          "start": 139,
          "end": 148
        },
        "declare": false,
        "start": 129,
        "end": 149
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 122,
      "end": 149
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 149
}
```
