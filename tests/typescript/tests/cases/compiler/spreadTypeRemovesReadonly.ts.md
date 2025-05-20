__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 148,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 54,
      "body": {
        "type": "TSInterfaceBody",
        "start": 23,
        "end": 54,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 29,
            "end": 52,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 38,
              "end": 43,
              "decorators": [],
              "name": "value",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": true,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 43,
              "end": 51,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 45,
                "end": 51
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 22,
        "decorators": [],
        "name": "ReadonlyData",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 56,
      "end": 100,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 62,
          "end": 99,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 62,
            "end": 80,
            "decorators": [],
            "name": "data",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 66,
              "end": 80,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 68,
                "end": 80,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 68,
                  "end": 80,
                  "decorators": [],
                  "name": "ReadonlyData",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 83,
            "end": 99,
            "properties": [
              {
                "type": "Property",
                "start": 85,
                "end": 97,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 85,
                  "end": 90,
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 92,
                  "end": 97,
                  "raw": "'foo'",
                  "value": "foo"
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 101,
      "end": 127,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 107,
          "end": 126,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 107,
            "end": 112,
            "decorators": [],
            "name": "clone",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 115,
            "end": 126,
            "properties": [
              {
                "type": "SpreadElement",
                "start": 117,
                "end": 124,
                "argument": {
                  "type": "Identifier",
                  "start": 120,
                  "end": 124,
                  "decorators": [],
                  "name": "data",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExpressionStatement",
      "start": 128,
      "end": 148,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 128,
        "end": 147,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 128,
          "end": 139,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 128,
            "end": 133,
            "decorators": [],
            "name": "clone",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 134,
            "end": 139,
            "decorators": [],
            "name": "value",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Literal",
          "start": 142,
          "end": 147,
          "raw": "'bar'",
          "value": "bar"
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
