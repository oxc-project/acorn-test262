__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 16,
  "end": 184,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 16,
      "end": 80,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 39,
        "end": 80,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 45,
            "end": 78,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 45,
              "end": 49,
              "decorators": [],
              "name": "next",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 49,
              "end": 78,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 52,
                "end": 78,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 62,
                    "end": 72,
                    "argument": {
                      "type": "Literal",
                      "start": 69,
                      "end": 71,
                      "raw": "\"\"",
                      "value": ""
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
      "start": 82,
      "end": 96,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 86,
          "end": 95,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 86,
            "end": 95,
            "decorators": [],
            "name": "v",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 87,
              "end": 95,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 89,
                "end": 95
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
      "start": 97,
      "end": 132,
      "await": false,
      "body": {
        "type": "BlockStatement",
        "start": 129,
        "end": 132,
        "body": []
      },
      "left": {
        "type": "Identifier",
        "start": 102,
        "end": 103,
        "decorators": [],
        "name": "v",
        "optional": false
      },
      "right": {
        "type": "NewExpression",
        "start": 107,
        "end": 127,
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "start": 111,
          "end": 127,
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
