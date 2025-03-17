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
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 29,
            "name": "Symbol",
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
                      "end": 27,
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 24,
                        "end": 27
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
      "start": 32,
      "end": 71,
      "id": {
        "type": "Identifier",
        "start": 38,
        "end": 39,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 40,
        "end": 71,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 46,
            "end": 69,
            "static": false,
            "computed": true,
            "key": {
              "type": "MemberExpression",
              "start": 47,
              "end": 62,
              "object": {
                "type": "Identifier",
                "start": 47,
                "end": 53,
                "name": "Symbol",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 54,
                "end": 62,
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
              "start": 63,
              "end": 69,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 66,
                "end": 69,
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
      "start": 73,
      "end": 97,
      "expression": {
        "type": "MemberExpression",
        "start": 73,
        "end": 97,
        "object": {
          "type": "NewExpression",
          "start": 74,
          "end": 79,
          "callee": {
            "type": "Identifier",
            "start": 78,
            "end": 79,
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
          "start": 81,
          "end": 96,
          "object": {
            "type": "Identifier",
            "start": 81,
            "end": 87,
            "name": "Symbol",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 88,
            "end": 96,
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
