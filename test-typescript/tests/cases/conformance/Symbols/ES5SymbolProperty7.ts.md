__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 97,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 30,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 29,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 29,
            "decorators": [],
            "name": "Symbol",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 10,
              "end": 29,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 12,
                "end": 29,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 14,
                    "end": 27,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 14,
                      "end": 22,
                      "decorators": [],
                      "name": "iterator",
                      "optional": false
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 22,
                      "end": 27,
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 24,
                        "end": 27
                      }
                    }
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
      "type": "ClassDeclaration",
      "start": 32,
      "end": 71,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 40,
        "end": 71,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 46,
            "end": 69,
            "computed": true,
            "decorators": [],
            "key": {
              "type": "MemberExpression",
              "start": 47,
              "end": 62,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 47,
                "end": 53,
                "decorators": [],
                "name": "Symbol",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 54,
                "end": 62,
                "decorators": [],
                "name": "iterator",
                "optional": false
              }
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 63,
              "end": 69,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 66,
                "end": 69,
                "body": []
              },
              "declare": false,
              "expression": false,
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
        "start": 38,
        "end": 39,
        "decorators": [],
        "name": "C",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ExpressionStatement",
      "start": 73,
      "end": 97,
      "expression": {
        "type": "MemberExpression",
        "start": 73,
        "end": 97,
        "computed": true,
        "object": {
          "type": "NewExpression",
          "start": 74,
          "end": 79,
          "arguments": [],
          "callee": {
            "type": "Identifier",
            "start": 78,
            "end": 79,
            "decorators": [],
            "name": "C",
            "optional": false
          }
        },
        "optional": false,
        "property": {
          "type": "MemberExpression",
          "start": 81,
          "end": 96,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 81,
            "end": 87,
            "decorators": [],
            "name": "Symbol",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 88,
            "end": 96,
            "decorators": [],
            "name": "iterator",
            "optional": false
          }
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
