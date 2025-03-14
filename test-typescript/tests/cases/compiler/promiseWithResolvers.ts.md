promiseWithResolvers.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 78,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 12,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 6,
        "decorators": [],
        "name": "T",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 9,
        "end": 11,
        "members": []
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 13,
      "end": 77,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 19,
          "end": 76,
          "definite": false,
          "id": {
            "type": "ObjectPattern",
            "start": 19,
            "end": 47,
            "decorators": [],
            "optional": false,
            "properties": [
              {
                "type": "Property",
                "start": 21,
                "end": 28,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 21,
                  "end": 28,
                  "decorators": [],
                  "name": "promise",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": true,
                "value": {
                  "type": "Identifier",
                  "start": 21,
                  "end": 28,
                  "decorators": [],
                  "name": "promise",
                  "optional": false
                }
              },
              {
                "type": "Property",
                "start": 30,
                "end": 37,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 30,
                  "end": 37,
                  "decorators": [],
                  "name": "resolve",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": true,
                "value": {
                  "type": "Identifier",
                  "start": 30,
                  "end": 37,
                  "decorators": [],
                  "name": "resolve",
                  "optional": false
                }
              },
              {
                "type": "Property",
                "start": 39,
                "end": 45,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 39,
                  "end": 45,
                  "decorators": [],
                  "name": "reject",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": true,
                "value": {
                  "type": "Identifier",
                  "start": 39,
                  "end": 45,
                  "decorators": [],
                  "name": "reject",
                  "optional": false
                }
              }
            ]
          },
          "init": {
            "type": "CallExpression",
            "start": 50,
            "end": 76,
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "start": 50,
              "end": 71,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 50,
                "end": 57,
                "decorators": [],
                "name": "Promise",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 58,
                "end": 71,
                "decorators": [],
                "name": "withResolvers",
                "optional": false
              }
            },
            "optional": false,
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 71,
              "end": 74,
              "params": [
                {
                  "type": "TSTypeReference",
                  "start": 72,
                  "end": 73,
                  "typeName": {
                    "type": "Identifier",
                    "start": 72,
                    "end": 73,
                    "decorators": [],
                    "name": "T",
                    "optional": false
                  }
                }
              ]
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    }
  ],
  "sourceType": "script"
}
```
