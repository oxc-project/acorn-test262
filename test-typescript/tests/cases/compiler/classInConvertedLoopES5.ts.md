__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 211,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 48,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 47,
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 42,
            "name": "classesByRow",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 18,
              "end": 42,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 20,
                "end": 42,
                "typeName": {
                  "type": "Identifier",
                  "start": 20,
                  "end": 26,
                  "name": "Record",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 26,
                  "end": 42,
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 27,
                      "end": 33
                    },
                    {
                      "type": "TSObjectKeyword",
                      "start": 35,
                      "end": 41
                    }
                  ]
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 45,
            "end": 47,
            "properties": []
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "ForOfStatement",
      "start": 49,
      "end": 211,
      "await": false,
      "left": {
        "type": "VariableDeclaration",
        "start": 54,
        "end": 63,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 60,
            "end": 63,
            "id": {
              "type": "Identifier",
              "start": 60,
              "end": 63,
              "name": "row",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": null,
            "definite": false
          }
        ],
        "kind": "const",
        "declare": false
      },
      "right": {
        "type": "ArrayExpression",
        "start": 67,
        "end": 92,
        "elements": [
          {
            "type": "Literal",
            "start": 68,
            "end": 71,
            "value": "1",
            "raw": "'1'"
          },
          {
            "type": "Literal",
            "start": 73,
            "end": 76,
            "value": "2",
            "raw": "'2'"
          },
          {
            "type": "Literal",
            "start": 78,
            "end": 81,
            "value": "3",
            "raw": "'3'"
          },
          {
            "type": "Literal",
            "start": 83,
            "end": 86,
            "value": "4",
            "raw": "'4'"
          },
          {
            "type": "Literal",
            "start": 88,
            "end": 91,
            "value": "5",
            "raw": "'5'"
          }
        ]
      },
      "body": {
        "type": "BlockStatement",
        "start": 94,
        "end": 211,
        "body": [
          {
            "type": "ClassDeclaration",
            "start": 98,
            "end": 176,
            "id": {
              "type": "Identifier",
              "start": 104,
              "end": 112,
              "name": "RowClass",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "superClass": null,
            "body": {
              "type": "ClassBody",
              "start": 113,
              "end": 176,
              "body": [
                {
                  "type": "PropertyDefinition",
                  "start": 119,
                  "end": 129,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 119,
                    "end": 122,
                    "name": "row",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Identifier",
                    "start": 125,
                    "end": 128,
                    "name": "row",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "decorators": [],
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "typeAnnotation": null,
                  "accessibility": null
                },
                {
                  "type": "PropertyDefinition",
                  "start": 134,
                  "end": 172,
                  "static": true,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 141,
                    "end": 148,
                    "name": "factory",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "ArrowFunctionExpression",
                    "start": 151,
                    "end": 171,
                    "id": null,
                    "expression": true,
                    "generator": false,
                    "async": false,
                    "params": [],
                    "body": {
                      "type": "NewExpression",
                      "start": 157,
                      "end": 171,
                      "callee": {
                        "type": "Identifier",
                        "start": 161,
                        "end": 169,
                        "name": "RowClass",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "arguments": [],
                      "typeArguments": null
                    },
                    "typeParameters": null,
                    "returnType": null
                  },
                  "decorators": [],
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "typeAnnotation": null,
                  "accessibility": null
                }
              ]
            },
            "decorators": [],
            "typeParameters": null,
            "implements": [],
            "abstract": false,
            "declare": false,
            "superTypeArguments": null
          },
          {
            "type": "ExpressionStatement",
            "start": 180,
            "end": 209,
            "expression": {
              "type": "AssignmentExpression",
              "start": 180,
              "end": 208,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 180,
                "end": 197,
                "object": {
                  "type": "Identifier",
                  "start": 180,
                  "end": 192,
                  "name": "classesByRow",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 193,
                  "end": 196,
                  "name": "row",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": true,
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 200,
                "end": 208,
                "name": "RowClass",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          }
        ]
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
