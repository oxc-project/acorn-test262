classInConvertedLoopES5.ts
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 42,
            "decorators": [],
            "name": "classesByRow",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 18,
              "end": 42,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 20,
                "end": 42,
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
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 20,
                  "end": 26,
                  "decorators": [],
                  "name": "Record",
                  "optional": false
                }
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 45,
            "end": 47,
            "properties": []
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ForOfStatement",
      "start": 49,
      "end": 211,
      "await": false,
      "body": {
        "type": "BlockStatement",
        "start": 94,
        "end": 211,
        "body": [
          {
            "type": "ClassDeclaration",
            "start": 98,
            "end": 176,
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "start": 113,
              "end": 176,
              "body": [
                {
                  "type": "PropertyDefinition",
                  "start": 119,
                  "end": 129,
                  "computed": false,
                  "declare": false,
                  "decorators": [],
                  "definite": false,
                  "key": {
                    "type": "Identifier",
                    "start": 119,
                    "end": 122,
                    "decorators": [],
                    "name": "row",
                    "optional": false
                  },
                  "optional": false,
                  "override": false,
                  "readonly": false,
                  "static": false,
                  "value": {
                    "type": "Identifier",
                    "start": 125,
                    "end": 128,
                    "decorators": [],
                    "name": "row",
                    "optional": false
                  }
                },
                {
                  "type": "PropertyDefinition",
                  "start": 134,
                  "end": 172,
                  "computed": false,
                  "declare": false,
                  "decorators": [],
                  "definite": false,
                  "key": {
                    "type": "Identifier",
                    "start": 141,
                    "end": 148,
                    "decorators": [],
                    "name": "factory",
                    "optional": false
                  },
                  "optional": false,
                  "override": false,
                  "readonly": false,
                  "static": true,
                  "value": {
                    "type": "ArrowFunctionExpression",
                    "start": 151,
                    "end": 171,
                    "async": false,
                    "body": {
                      "type": "NewExpression",
                      "start": 157,
                      "end": 171,
                      "arguments": [],
                      "callee": {
                        "type": "Identifier",
                        "start": 161,
                        "end": 169,
                        "decorators": [],
                        "name": "RowClass",
                        "optional": false
                      }
                    },
                    "expression": true,
                    "generator": false,
                    "id": null,
                    "params": []
                  }
                }
              ]
            },
            "declare": false,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "start": 104,
              "end": 112,
              "decorators": [],
              "name": "RowClass",
              "optional": false
            },
            "implements": [],
            "superClass": null
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
                "computed": true,
                "object": {
                  "type": "Identifier",
                  "start": 180,
                  "end": 192,
                  "decorators": [],
                  "name": "classesByRow",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 193,
                  "end": 196,
                  "decorators": [],
                  "name": "row",
                  "optional": false
                }
              },
              "right": {
                "type": "Identifier",
                "start": 200,
                "end": 208,
                "decorators": [],
                "name": "RowClass",
                "optional": false
              }
            }
          }
        ]
      },
      "left": {
        "type": "VariableDeclaration",
        "start": 54,
        "end": 63,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 60,
            "end": 63,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 60,
              "end": 63,
              "decorators": [],
              "name": "row",
              "optional": false
            },
            "init": null
          }
        ],
        "declare": false,
        "kind": "const"
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
            "raw": "'1'",
            "value": "1"
          },
          {
            "type": "Literal",
            "start": 73,
            "end": 76,
            "raw": "'2'",
            "value": "2"
          },
          {
            "type": "Literal",
            "start": 78,
            "end": 81,
            "raw": "'3'",
            "value": "3"
          },
          {
            "type": "Literal",
            "start": 83,
            "end": 86,
            "raw": "'4'",
            "value": "4"
          },
          {
            "type": "Literal",
            "start": 88,
            "end": 91,
            "raw": "'5'",
            "value": "5"
          }
        ]
      }
    }
  ],
  "sourceType": "script"
}
```
