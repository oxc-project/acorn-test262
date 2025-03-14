__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 16,
  "end": 145,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 16,
      "end": 92,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 39,
        "end": 92,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 45,
            "end": 90,
            "computed": true,
            "decorators": [],
            "key": {
              "type": "MemberExpression",
              "start": 46,
              "end": 61,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 46,
                "end": 52,
                "decorators": [],
                "name": "Symbol",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 53,
                "end": 61,
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
              "start": 62,
              "end": 90,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 65,
                "end": 90,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 75,
                    "end": 84,
                    "argument": {
                      "type": "Identifier",
                      "start": 82,
                      "end": 83,
                      "decorators": [],
                      "name": "x",
                      "optional": false
                    }
                  }
                ]
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
        "start": 22,
        "end": 38,
        "decorators": [],
        "name": "MyStringIterator",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "VariableDeclaration",
      "start": 94,
      "end": 105,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 98,
          "end": 104,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 98,
            "end": 104,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 99,
              "end": 104,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 101,
                "end": 104
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
      "type": "ForOfStatement",
      "start": 106,
      "end": 145,
      "await": false,
      "body": {
        "type": "BlockStatement",
        "start": 142,
        "end": 145,
        "body": []
      },
      "left": {
        "type": "VariableDeclaration",
        "start": 111,
        "end": 116,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 115,
            "end": 116,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 115,
              "end": 116,
              "decorators": [],
              "name": "v",
              "optional": false
            },
            "init": null
          }
        ],
        "declare": false,
        "kind": "var"
      },
      "right": {
        "type": "NewExpression",
        "start": 120,
        "end": 140,
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "start": 124,
          "end": 140,
          "decorators": [],
          "name": "MyStringIterator",
          "optional": false
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
