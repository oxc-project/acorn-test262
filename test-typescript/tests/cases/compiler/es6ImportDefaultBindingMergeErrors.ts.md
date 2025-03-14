es6ImportDefaultBindingMergeErrors_0.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 30,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 11,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 10,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 5,
            "decorators": [],
            "name": "a",
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 8,
            "end": 10,
            "raw": "10",
            "value": 10
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExportDefaultDeclaration",
      "start": 12,
      "end": 29,
      "declaration": {
        "type": "Identifier",
        "start": 27,
        "end": 28,
        "decorators": [],
        "name": "a",
        "optional": false
      },
      "exportKind": "value"
    }
  ],
  "sourceType": "module"
}
```
es6ImportDefaultBindingMergeErrors_1.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 441,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 68,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 27,
        "end": 67,
        "raw": "\"./es6ImportDefaultBindingMergeErrors_0\"",
        "value": "./es6ImportDefaultBindingMergeErrors_0"
      },
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 7,
          "end": 21,
          "local": {
            "type": "Identifier",
            "start": 7,
            "end": 21,
            "decorators": [],
            "name": "defaultBinding",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 69,
      "end": 111,
      "body": {
        "type": "TSInterfaceBody",
        "start": 94,
        "end": 111,
        "body": []
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 79,
        "end": 93,
        "decorators": [],
        "name": "defaultBinding",
        "optional": false
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 112,
      "end": 135,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 116,
          "end": 134,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 116,
            "end": 117,
            "decorators": [],
            "name": "x",
            "optional": false
          },
          "init": {
            "type": "Identifier",
            "start": 120,
            "end": 134,
            "decorators": [],
            "name": "defaultBinding",
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ImportDeclaration",
      "start": 136,
      "end": 205,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 164,
        "end": 204,
        "raw": "\"./es6ImportDefaultBindingMergeErrors_0\"",
        "value": "./es6ImportDefaultBindingMergeErrors_0"
      },
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 143,
          "end": 158,
          "local": {
            "type": "Identifier",
            "start": 143,
            "end": 158,
            "decorators": [],
            "name": "defaultBinding2",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "VariableDeclaration",
      "start": 225,
      "end": 261,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 229,
          "end": 260,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 229,
            "end": 244,
            "decorators": [],
            "name": "defaultBinding2",
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 247,
            "end": 260,
            "raw": "\"hello world\"",
            "value": "hello world"
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ImportDeclaration",
      "start": 263,
      "end": 332,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 291,
        "end": 331,
        "raw": "\"./es6ImportDefaultBindingMergeErrors_0\"",
        "value": "./es6ImportDefaultBindingMergeErrors_0"
      },
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 270,
          "end": 285,
          "local": {
            "type": "Identifier",
            "start": 270,
            "end": 285,
            "decorators": [],
            "name": "defaultBinding3",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "ImportDeclaration",
      "start": 352,
      "end": 421,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 380,
        "end": 420,
        "raw": "\"./es6ImportDefaultBindingMergeErrors_0\"",
        "value": "./es6ImportDefaultBindingMergeErrors_0"
      },
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 359,
          "end": 374,
          "local": {
            "type": "Identifier",
            "start": 359,
            "end": 374,
            "decorators": [],
            "name": "defaultBinding3",
            "optional": false
          }
        }
      ]
    }
  ],
  "sourceType": "module"
}
```
