ES5SymbolProperty3.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 83,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 16,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 15,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 15,
            "decorators": [],
            "name": "Symbol",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 10,
              "end": 15,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 12,
                "end": 15
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
      "start": 18,
      "end": 57,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 26,
        "end": 57,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 32,
            "end": 55,
            "computed": true,
            "decorators": [],
            "key": {
              "type": "MemberExpression",
              "start": 33,
              "end": 48,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 33,
                "end": 39,
                "decorators": [],
                "name": "Symbol",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 40,
                "end": 48,
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
              "start": 49,
              "end": 55,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 52,
                "end": 55,
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
        "start": 24,
        "end": 25,
        "decorators": [],
        "name": "C",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ExpressionStatement",
      "start": 59,
      "end": 83,
      "expression": {
        "type": "MemberExpression",
        "start": 59,
        "end": 83,
        "computed": true,
        "object": {
          "type": "NewExpression",
          "start": 60,
          "end": 65,
          "arguments": [],
          "callee": {
            "type": "Identifier",
            "start": 64,
            "end": 65,
            "decorators": [],
            "name": "C",
            "optional": false
          }
        },
        "optional": false,
        "property": {
          "type": "MemberExpression",
          "start": 67,
          "end": 82,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 67,
            "end": 73,
            "decorators": [],
            "name": "Symbol",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 74,
            "end": 82,
            "decorators": [],
            "name": "iterator",
            "optional": false
          }
        }
      }
    }
  ],
  "sourceType": "script"
}
```
