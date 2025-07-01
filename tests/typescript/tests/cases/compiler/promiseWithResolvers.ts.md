__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 6
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "members": [],
        "start": 9,
        "end": 11
      },
      "declare": false,
      "start": 0,
      "end": 12
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "ObjectPattern",
            "decorators": [],
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "promise",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 21,
                  "end": 28
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "promise",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 21,
                  "end": 28
                },
                "method": false,
                "shorthand": true,
                "computed": false,
                "optional": false,
                "start": 21,
                "end": 28
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "resolve",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 30,
                  "end": 37
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "resolve",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 30,
                  "end": 37
                },
                "method": false,
                "shorthand": true,
                "computed": false,
                "optional": false,
                "start": 30,
                "end": 37
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "reject",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 39,
                  "end": 45
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "reject",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 39,
                  "end": 45
                },
                "method": false,
                "shorthand": true,
                "computed": false,
                "optional": false,
                "start": 39,
                "end": 45
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 19,
            "end": 47
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Promise",
                "optional": false,
                "typeAnnotation": null,
                "start": 50,
                "end": 57
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "withResolvers",
                "optional": false,
                "typeAnnotation": null,
                "start": 58,
                "end": 71
              },
              "optional": false,
              "computed": false,
              "start": 50,
              "end": 71
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 72,
                    "end": 73
                  },
                  "typeArguments": null,
                  "start": 72,
                  "end": 73
                }
              ],
              "start": 71,
              "end": 74
            },
            "arguments": [],
            "optional": false,
            "start": 50,
            "end": 76
          },
          "definite": false,
          "start": 19,
          "end": 76
        }
      ],
      "declare": false,
      "start": 13,
      "end": 77
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 77
}
```
