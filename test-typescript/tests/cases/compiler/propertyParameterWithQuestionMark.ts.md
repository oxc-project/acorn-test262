__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 191,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 42,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 42,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 14,
            "end": 40,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 14,
              "end": 25,
              "decorators": [],
              "name": "constructor",
              "optional": false
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 25,
              "end": 40,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 37,
                "end": 40,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "TSParameterProperty",
                  "start": 26,
                  "end": 35,
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "start": 33,
                    "end": 35,
                    "decorators": [],
                    "name": "x",
                    "optional": true
                  },
                  "readonly": false,
                  "static": false
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "decorators": [],
        "name": "C",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "VariableDeclaration",
      "start": 80,
      "end": 94,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 84,
          "end": 93,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 84,
            "end": 88,
            "decorators": [],
            "name": "v",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 85,
              "end": 88,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 87,
                "end": 88,
                "typeName": {
                  "type": "Identifier",
                  "start": 87,
                  "end": 88,
                  "decorators": [],
                  "name": "C",
                  "optional": false
                }
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 91,
            "end": 93,
            "properties": []
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 113,
      "end": 127,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 117,
          "end": 127,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 117,
            "end": 127,
            "decorators": [],
            "name": "v2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 119,
              "end": 127,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 121,
                "end": 127,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 123,
                    "end": 125,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 123,
                      "end": 124,
                      "decorators": [],
                      "name": "x",
                      "optional": false
                    },
                    "optional": true,
                    "readonly": false,
                    "static": false
                  }
                ]
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 128,
      "end": 135,
      "expression": {
        "type": "AssignmentExpression",
        "start": 128,
        "end": 134,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 128,
          "end": 129,
          "decorators": [],
          "name": "v",
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 132,
          "end": 134,
          "decorators": [],
          "name": "v2",
          "optional": false
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 154,
      "end": 176,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 158,
          "end": 175,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 158,
            "end": 167,
            "decorators": [],
            "name": "v3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 160,
              "end": 167,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 162,
                "end": 167,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 164,
                    "end": 165,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 164,
                      "end": 165,
                      "decorators": [],
                      "name": "x",
                      "optional": false
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false
                  }
                ]
              }
            }
          },
          "init": {
            "type": "NewExpression",
            "start": 170,
            "end": 175,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 174,
              "end": 175,
              "decorators": [],
              "name": "C",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
