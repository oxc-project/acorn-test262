__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 115,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 77,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 20,
        "decorators": [],
        "name": "SymbolIterator",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 21,
        "end": 77,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 27,
            "end": 75,
            "decorators": [],
            "key": {
              "type": "MemberExpression",
              "start": 28,
              "end": 43,
              "object": {
                "type": "Identifier",
                "start": 28,
                "end": 34,
                "decorators": [],
                "name": "Symbol",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 35,
                "end": 43,
                "decorators": [],
                "name": "iterator",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "value": {
              "type": "FunctionExpression",
              "start": 44,
              "end": 75,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 47,
                "end": 75,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 57,
                    "end": 69,
                    "argument": {
                      "type": "ThisExpression",
                      "start": 64,
                      "end": 68
                    }
                  }
                ]
              },
              "expression": false
            },
            "kind": "method",
            "computed": true,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 79,
      "end": 115,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 83,
          "end": 114,
          "id": {
            "type": "Identifier",
            "start": 83,
            "end": 88,
            "decorators": [],
            "name": "array",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrayExpression",
            "start": 91,
            "end": 114,
            "elements": [
              {
                "type": "SpreadElement",
                "start": 92,
                "end": 113,
                "argument": {
                  "type": "NewExpression",
                  "start": 95,
                  "end": 113,
                  "callee": {
                    "type": "Identifier",
                    "start": 99,
                    "end": 113,
                    "decorators": [],
                    "name": "SymbolIterator",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null,
                  "arguments": []
                }
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
