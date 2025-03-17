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
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 20,
        "name": "SymbolIterator",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 21,
        "end": 77,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 27,
            "end": 75,
            "static": false,
            "computed": true,
            "key": {
              "type": "MemberExpression",
              "start": 28,
              "end": 43,
              "object": {
                "type": "Identifier",
                "start": 28,
                "end": 34,
                "name": "Symbol",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 35,
                "end": 43,
                "name": "iterator",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 44,
              "end": 75,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
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
      "type": "VariableDeclaration",
      "start": 79,
      "end": 115,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 83,
          "end": 114,
          "id": {
            "type": "Identifier",
            "start": 83,
            "end": 88,
            "name": "array",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                    "name": "SymbolIterator",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [],
                  "typeArguments": null
                }
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
