__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 149,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 54,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 22,
        "name": "ReadonlyData",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
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
              "name": "value",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 62,
          "end": 99,
          "id": {
            "type": "Identifier",
            "start": 62,
            "end": 80,
            "name": "data",
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
                  "name": "ReadonlyData",
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
          "init": {
            "type": "ObjectExpression",
            "start": 83,
            "end": 99,
            "properties": [
              {
                "type": "Property",
                "start": 85,
                "end": 97,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 85,
                  "end": 90,
                  "name": "value",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 92,
                  "end": 97,
                  "value": "foo",
                  "raw": "'foo'"
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 107,
            "end": 112,
            "name": "clone",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                  "name": "data",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "const",
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
            "name": "clone",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 134,
            "end": 139,
            "name": "value",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
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
