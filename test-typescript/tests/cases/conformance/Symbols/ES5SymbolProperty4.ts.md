ES5SymbolProperty4.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 100,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 33,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 32,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 32,
            "decorators": [],
            "name": "Symbol",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 10,
              "end": 32,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 12,
                "end": 32,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 14,
                    "end": 30,
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
                      "end": 30,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 24,
                        "end": 30
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
      "start": 35,
      "end": 74,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 43,
        "end": 74,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 49,
            "end": 72,
            "computed": true,
            "decorators": [],
            "key": {
              "type": "MemberExpression",
              "start": 50,
              "end": 65,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 50,
                "end": 56,
                "decorators": [],
                "name": "Symbol",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 57,
                "end": 65,
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
              "start": 66,
              "end": 72,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 69,
                "end": 72,
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
        "start": 41,
        "end": 42,
        "decorators": [],
        "name": "C",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ExpressionStatement",
      "start": 76,
      "end": 100,
      "expression": {
        "type": "MemberExpression",
        "start": 76,
        "end": 100,
        "computed": true,
        "object": {
          "type": "NewExpression",
          "start": 77,
          "end": 82,
          "arguments": [],
          "callee": {
            "type": "Identifier",
            "start": 81,
            "end": 82,
            "decorators": [],
            "name": "C",
            "optional": false
          }
        },
        "optional": false,
        "property": {
          "type": "MemberExpression",
          "start": 84,
          "end": 99,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 84,
            "end": 90,
            "decorators": [],
            "name": "Symbol",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 91,
            "end": 99,
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
