__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 264,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 29,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 28,
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 17,
            "decorators": [],
            "name": "sym",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 9,
              "end": 17,
              "typeAnnotation": {
                "type": "TSSymbolKeyword",
                "start": 11,
                "end": 17
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "start": 20,
            "end": 28,
            "callee": {
              "type": "Identifier",
              "start": 20,
              "end": 26,
              "decorators": [],
              "name": "Symbol",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 31,
      "end": 59,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 37,
        "end": 42,
        "decorators": [],
        "name": "Base1",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 43,
        "end": 59,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 47,
            "end": 57,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 48,
              "end": 51,
              "decorators": [],
              "name": "sym",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 52,
              "end": 57,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 55,
                "end": 57,
                "body": []
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
      "type": "ClassDeclaration",
      "start": 61,
      "end": 115,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 67,
        "end": 75,
        "decorators": [],
        "name": "Derived1",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 84,
        "end": 89,
        "decorators": [],
        "name": "Base1",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 90,
        "end": 115,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 94,
            "end": 113,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 104,
              "end": 107,
              "decorators": [],
              "name": "sym",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 108,
              "end": 113,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 111,
                "end": 113,
                "body": []
              },
              "expression": false
            },
            "kind": "method",
            "computed": true,
            "static": false,
            "override": true,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 117,
      "end": 145,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 123,
        "end": 128,
        "decorators": [],
        "name": "Base2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 129,
        "end": 145,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 133,
            "end": 143,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 134,
              "end": 137,
              "decorators": [],
              "name": "sym",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 138,
              "end": 143,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 141,
                "end": 143,
                "body": []
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
      "type": "ClassDeclaration",
      "start": 147,
      "end": 192,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 153,
        "end": 161,
        "decorators": [],
        "name": "Derived2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 170,
        "end": 175,
        "decorators": [],
        "name": "Base2",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 176,
        "end": 192,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 180,
            "end": 190,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 181,
              "end": 184,
              "decorators": [],
              "name": "sym",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 185,
              "end": 190,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 188,
                "end": 190,
                "body": []
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
      "type": "ClassDeclaration",
      "start": 194,
      "end": 208,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 200,
        "end": 205,
        "decorators": [],
        "name": "Base3",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 206,
        "end": 208,
        "body": []
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 210,
      "end": 264,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 216,
        "end": 224,
        "decorators": [],
        "name": "Derived3",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 233,
        "end": 238,
        "decorators": [],
        "name": "Base3",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 239,
        "end": 264,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 243,
            "end": 262,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 253,
              "end": 256,
              "decorators": [],
              "name": "sym",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 257,
              "end": 262,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 260,
                "end": 262,
                "body": []
              },
              "expression": false
            },
            "kind": "method",
            "computed": true,
            "static": false,
            "override": true,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
