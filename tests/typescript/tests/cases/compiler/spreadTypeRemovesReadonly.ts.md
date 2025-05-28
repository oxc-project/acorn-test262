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
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 22,
        "decorators": [],
        "name": "ReadonlyData",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 23,
        "end": 54,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 29,
            "end": 52,
            "computed": false,
            "optional": false,
            "readonly": true,
            "key": {
              "type": "Identifier",
              "start": 38,
              "end": 43,
              "decorators": [],
              "name": "value",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 43,
              "end": 51,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 45,
                "end": 51
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 56,
      "end": 100,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 62,
          "end": 99,
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
                "typeName": {
                  "type": "Identifier",
                  "start": 68,
                  "end": 80,
                  "decorators": [],
                  "name": "ReadonlyData",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
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
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 85,
                  "end": 90,
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 92,
                  "end": 97,
                  "value": "foo",
                  "raw": "'foo'"
                },
                "method": false,
                "shorthand": false,
                "computed": false,
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
      "type": "VariableDeclaration",
      "start": 101,
      "end": 127,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 107,
          "end": 126,
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
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 128,
      "end": 148,
      "expression": {
        "type": "AssignmentExpression",
        "start": 128,
        "end": 147,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 128,
          "end": 139,
          "object": {
            "type": "Identifier",
            "start": 128,
            "end": 133,
            "decorators": [],
            "name": "clone",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 134,
            "end": 139,
            "decorators": [],
            "name": "value",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "Literal",
          "start": 142,
          "end": 147,
          "value": "bar",
          "raw": "'bar'"
        }
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
