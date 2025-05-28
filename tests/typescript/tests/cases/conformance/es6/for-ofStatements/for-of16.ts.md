__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 271,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 79,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 22,
        "decorators": [],
        "name": "MyStringIterator",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 23,
        "end": 79,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 29,
            "end": 77,
            "decorators": [],
            "key": {
              "type": "MemberExpression",
              "start": 30,
              "end": 45,
              "object": {
                "type": "Identifier",
                "start": 30,
                "end": 36,
                "decorators": [],
                "name": "Symbol",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 37,
                "end": 45,
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
              "start": 46,
              "end": 77,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 49,
                "end": 77,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 59,
                    "end": 71,
                    "argument": {
                      "type": "ThisExpression",
                      "start": 66,
                      "end": 70
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
      "start": 81,
      "end": 95,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 85,
          "end": 94,
          "id": {
            "type": "Identifier",
            "start": 85,
            "end": 94,
            "decorators": [],
            "name": "v",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 86,
              "end": 94,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 88,
                "end": 94
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ForOfStatement",
      "start": 96,
      "end": 131,
      "await": false,
      "left": {
        "type": "Identifier",
        "start": 101,
        "end": 102,
        "decorators": [],
        "name": "v",
        "optional": false,
        "typeAnnotation": null
      },
      "right": {
        "type": "NewExpression",
        "start": 106,
        "end": 126,
        "callee": {
          "type": "Identifier",
          "start": 110,
          "end": 126,
          "decorators": [],
          "name": "MyStringIterator",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": []
      },
      "body": {
        "type": "BlockStatement",
        "start": 128,
        "end": 131,
        "body": []
      }
    },
    {
      "type": "ForOfStatement",
      "start": 148,
      "end": 183,
      "await": false,
      "left": {
        "type": "Identifier",
        "start": 153,
        "end": 154,
        "decorators": [],
        "name": "v",
        "optional": false,
        "typeAnnotation": null
      },
      "right": {
        "type": "NewExpression",
        "start": 158,
        "end": 178,
        "callee": {
          "type": "Identifier",
          "start": 162,
          "end": 178,
          "decorators": [],
          "name": "MyStringIterator",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": []
      },
      "body": {
        "type": "BlockStatement",
        "start": 180,
        "end": 183,
        "body": []
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
