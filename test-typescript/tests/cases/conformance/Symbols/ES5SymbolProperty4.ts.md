__ESTREE_TEST__:PASS:
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
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 32,
            "name": "Symbol",
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
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 14,
                      "end": 22,
                      "name": "iterator",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 22,
                      "end": 30,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 24,
                        "end": 30
                      }
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 35,
      "end": 74,
      "id": {
        "type": "Identifier",
        "start": 41,
        "end": 42,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 43,
        "end": 74,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 49,
            "end": 72,
            "static": false,
            "computed": true,
            "key": {
              "type": "MemberExpression",
              "start": 50,
              "end": 65,
              "object": {
                "type": "Identifier",
                "start": 50,
                "end": 56,
                "name": "Symbol",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 57,
                "end": 65,
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
              "start": 66,
              "end": 72,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 69,
                "end": 72,
                "body": []
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
      "type": "ExpressionStatement",
      "start": 76,
      "end": 100,
      "expression": {
        "type": "MemberExpression",
        "start": 76,
        "end": 100,
        "object": {
          "type": "NewExpression",
          "start": 77,
          "end": 82,
          "callee": {
            "type": "Identifier",
            "start": 81,
            "end": 82,
            "name": "C",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "arguments": [],
          "typeArguments": null
        },
        "property": {
          "type": "MemberExpression",
          "start": 84,
          "end": 99,
          "object": {
            "type": "Identifier",
            "start": 84,
            "end": 90,
            "name": "Symbol",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 91,
            "end": 99,
            "name": "iterator",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "computed": true,
        "optional": false
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
